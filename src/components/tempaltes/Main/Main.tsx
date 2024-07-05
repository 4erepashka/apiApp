import { ApiOptionsList } from "../../molecules/ApiOptionsList/ApiOptionsList"
import { FormGetCode } from "../../organism/FormGetCode/FormGetCode"
import { FormGetStatus } from "../../organism/FormGetStatus/FormGetStatus"
import { FormSignUp } from "../../organism/FormSignUp/FormSignUp"
import { RoleList } from "../../organism/RoleList/RoleList"
import { useUserContext } from "../../../data/Context/useUserContext"
import { useEffect } from "react"
import { PacmanLoader } from 'react-spinners';

const Main = () =>{
    const {state, getAllRoles, allroles, currentOption, isloading} = useUserContext();
    console.log('current option is', currentOption)
    console.log('state', state)
    useEffect(()=>{
        console.log('localstorage', localStorage)
        console.log('render')
        getAllRoles()
    }, [])
    return(
        <>
            <ApiOptionsList/>
            <PacmanLoader style={{position: 'absolute', top:'50%'}} size={30} loading={isloading &&currentOption === 'all' } color="#ff5770"  />
            {currentOption === 'all' && <RoleList roles = {{ roles: allroles }}/>}
            {currentOption === 'signup' && <FormSignUp/>} 
            {currentOption === 'code' && <FormGetCode/>}
            {currentOption === 'status' && <FormGetStatus/>}
        </>
    )
}

export {Main}