import { createContext } from "react"
import { IDataSignUp } from "./UserContextProvider"
interface userStateType  {
    email: string,
    role: string,
    token: string,
    code: string,
    status: string,
    error: string
}
export interface IUserContext{
    state: userStateType,
    getAllRoles?: ()=>{},
    allroles: {},
    setOption?: (option:string)=>void,
    currentOption: string,
    handlerSignUp?: (data:IDataSignUp)=> void,
    isloading: boolean,
    handlerGetCode?: (email:string)=>void
    handlerSetStatus?: (token:string, status: string)=>void,
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
    allroles: {},
    currentOption: '',
    isloading: false,
    isloadingGetCode: false,
    isloadingSetStatus: false,
    isloadingSignUp: false,
}
const userContext = createContext<IUserContext>(defaultState);
export {userContext}