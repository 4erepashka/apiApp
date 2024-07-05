import { useEffect } from "react"
import { ApiOption } from "../../atoms/ApiOption/ApiOption"
import styles from './ApiOptionsList.module.sass'
import  { useUserContext } from "../../../data/Context/useUserContext"
const ApiOptionsList = () =>{
    const {setOption} = useUserContext()
    useEffect(()=>{
        setOption('all')
    }, [])
    return(
        <div className={styles.Wrapper}>
            <ApiOption text ={'get all roles'} action={'all'}/>
            <ApiOption text ={'signUp'} action={'signup'}/>
            <ApiOption text ={'get code'} action={'code'}/>
            <ApiOption text ={'get status'} action={'status'}/>
        </div>
    )
}

export {ApiOptionsList}