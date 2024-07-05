import { useContext } from "react"
import { userContext } from "./UserContext"

const useUserContext = ()=>{
    return(
        useContext(userContext)
    )
}
export {useUserContext}