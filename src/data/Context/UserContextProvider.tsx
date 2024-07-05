import {  useReducer,  ReactNode, useState }from "react";
import { userContext } from "./UserContext";
enum userAction{
    SETCODE = 'SETCODE',
    SETTOKEN = 'SETTOKEN',
    SETEMAIL = 'SETEMAIL',
    SETROLE = 'SETROLE',
    SETSTATUS = 'SETSTATUS',
    SETERROR = 'SETERROR'

}

interface userStateType  {
    email: string,
    role: string,
    token: string,
    code: string,
    status: string,
    error: string
}

interface userActionType{
    type: userAction,
    payload: string 
}

export interface IDataSignUp{
    first_name: string,
    last_name: string,
    email: string,
    role: string 
}


const userReducer = (state: userStateType, action: userActionType) =>{
    switch (action.type){

        case userAction.SETEMAIL:
            return({...state, email: action.payload})
        case userAction.SETTOKEN:
            return({...state, token: action.payload})
        case userAction.SETROLE:
            return({...state, email: action.payload})
        case userAction.SETSTATUS:
            return({...state, status: action.payload})
        case userAction.SETCODE:
            return({...state, code: action.payload})
        case userAction.SETERROR:
            return({...state, error: action.payload})
        default:
            return state
    }
}


const INIT_STATE = {
    role: localStorage.getItem('user_role') || '',
    token: localStorage.getItem('user_token') || '',
    code: localStorage.getItem('user_code') || '',
    email: localStorage.getItem('user_email') || '',
    status: localStorage.getItem('user_status') || '',
    error: localStorage.getItem('user_error') || '',
}


const UserContextProvoder:React.FC<{ children: ReactNode }>= ({children})=>{
    const [state, dispatch] = useReducer(userReducer, INIT_STATE || {})
    const [allroles, setallroles] = useState([])
    const [currentOption, setCurrentOption] = useState('')
    const [isloadingSignUp, setisloadingSignUp] = useState(false)
    const [isloadingGetCode, setisloadingGetCode] = useState(false)
    const [isloadingSetStatus, setisloadingSetStatus] = useState(false)
    const [isloading, setisloading] = useState(false)
    const setOption = (option : string) =>{
        setCurrentOption(option)
    }

    const codeToken = (email: string, code: string)=>{
        const combinestring = email+':'+code;
        if (typeof window === 'undefined'){
            return Buffer.from(combinestring).toString('base64');
        }else{
            return btoa(combinestring) 
        }
    }

    const generateToken = (email: string, code: string)=>{
        const token = codeToken(email, code)
        return token
    }

    const getCodeFetch = async (email: string) =>{
        try{
            const response = await fetch(`http://193.19.100.32:7000/api/get-code?email=${encodeURIComponent(email)}`)
            console.log('response', response.status)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            setisloadingGetCode(false)
            const output = await response.json();
            console.log('Код:', output);
            dispatch({type: userAction.SETCODE, payload: maskString(output, 2)})
            dispatch({type: userAction.SETEMAIL, payload: email})
            dispatch({type: userAction.SETTOKEN, payload: maskString(generateToken(email, output), 4)})
       }catch (error) {
            console.error('Ошибка:', error);
            dispatch({type: userAction.SETERROR, payload: 'не удалось найти запись в бд'})
            setTimeout(()=>dispatch({type: userAction.SETERROR, payload: ''}), 3000)
            setisloadingGetCode(false)
          }
    }

    const handlerGetCode = (email:string)=>{
        setisloadingGetCode(true)
        dispatch({type: userAction.SETCODE, payload: ''})
        getCodeFetch(email)
    }

    const  maskString = (str: string, visibleCount:number) =>{
        if (str.length <= 2 * visibleCount) {
          return str; 
        }
        const start = str.slice(0, visibleCount);
        const end = str.slice(-visibleCount);
        const masked = '*'.repeat(str.length - 2 * visibleCount);
        return start + masked + end;
      }

    const setStatusFetch = async (data:{token: string, status: string}) =>{
        try{
            const response = await fetch('http://193.19.100.32:7000/api/set-status', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            setisloadingSetStatus(false)
            const output = await response.json();
            console.log('Успешно:', output);
            dispatch({type: userAction.SETSTATUS, payload: output})
            setTimeout(()=> dispatch({type: userAction.SETSTATUS, payload: ''}), 4000)
        }catch (error) {
            dispatch({type: userAction.SETERROR, payload: 'Пользователь с таким email и кодом не найден'})
            setTimeout(()=>dispatch({type: userAction.SETERROR, payload: ''}), 3000)
            setisloadingSetStatus(false)
            console.error('Ошибка:', error);
        }
    }

    const handlerSetStatus = (tokenData:string, statusData: string)=>{
        setisloadingSetStatus(true)
        setStatusFetch({token: tokenData, status: statusData })
    }
   
    const sendSignUpData = async (data:IDataSignUp)=>{
        try{
            const response = await fetch('http://193.19.100.32:7000/api/sign-up', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
            setisloadingSignUp(false)
            const output = await response.json();
            console.log('Успешно:', output);
            dispatch({type: userAction.SETSTATUS, payload: output})
            setTimeout(()=> dispatch({type: userAction.SETSTATUS, payload: ''}), 2000)
        }catch (error) {
            console.error('Ошибка:', error);
            dispatch({type: userAction.SETERROR, payload: 'Что-то сломалось ('})
        }
    }

    const handlerSignUp = (data:IDataSignUp)=>{
        console.log(data)
        dispatch({type: userAction.SETEMAIL, payload: data.email})
        dispatch({type: userAction.SETROLE, payload: data.role})
        localStorage.setItem('user_email', JSON.stringify(data.email))
        localStorage.setItem('user_role', JSON.stringify(data.role))
        setisloadingSignUp(true)
        sendSignUpData(data)
    }

    const getAllRoles = async ()=>{
        setisloading(true)
        try{
            const res = await fetch('http://193.19.100.32:7000/api/get-roles')
            if (!res.ok) {
                throw new Error('Network response was not ok ' + res.statusText);
            }
            const roles = await res.json();
            setallroles(roles)
            setisloading(false)
        }
        catch(err:any){
            console.log('smth wrong', err.message)
        }
    }

    const value = {
        state,
        getAllRoles,
        allroles,
        setOption,
        currentOption,
        handlerSignUp,
        handlerGetCode,
        isloading,
        isloadingGetCode,
        isloadingSetStatus,
        isloadingSignUp,
        handlerSetStatus
    }
    return(
        <userContext.Provider value = {value}>{children}</userContext.Provider>
    )
}

export {UserContextProvoder}