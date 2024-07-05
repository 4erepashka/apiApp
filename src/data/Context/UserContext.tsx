import { createContext } from "react"
import { IDataSignUp } from "./UserContextProvider"
interface userStateType  {
    email: string,
    role: string,
    token: string,
    code: string,
    status: string,
    error: string | null
}
export interface IUserContext{
    state: userStateType,
    getAllRoles: ()=>void,
    allroles: string[],
    setOption: (option:string)=>void,
    currentOption: string,
    handlerSignUp: (data:IDataSignUp)=> void,
    isloading: boolean,
    handlerGetCode: (email:string)=>void
    handlerSetStatus: (token:string, status: string)=>void,
    isloadingGetCode: boolean,
    isloadingSetStatus: boolean,
    isloadingSignUp: boolean,
}

const defaultState = {
    state: {
        email: '',
        role: '',
        token: '',
        code: '',
        status: '',
        error: ''
    },
    getAllRoles: ()=>{},
    allroles: [],
    currentOption: '',
    isloading: false,
    isloadingGetCode: false,
    isloadingSetStatus: false,
    isloadingSignUp: false,
    setOption: (_option: string)=> {},
    handlerSignUp: (_data: IDataSignUp)=> {},
    handlerGetCode: (_email: string)=> {},
    handlerSetStatus: (_token:string, _status: string)=> {},
}
const userContext = createContext<IUserContext>(defaultState);
export {userContext}