import { InputsSignUpList } from "../../molecules/InputsSignUpList/InputsSignUpList"
import style from './FormSignUp.module.sass'
import { useUserContext } from "../../../data/Context/useUserContext"
import { PacmanLoader } from 'react-spinners';
import { useState } from "react"
import { Button } from "../../atoms/Button/Button";
import { ErrorInput } from "../../atoms/ErrorInput/ErrorInput";

const FormSignUp = () =>{
    const {handlerSignUp, state, isloadingSignUp} = useUserContext()
    const [err, setErr] = useState(false)
    const handlerSubmite = (event)=>{
        const request = {
            "last_name": event.target.lastname.value,
            "first_name": event.target.firstname.value,
            "email": event.target.email.value,
            "role": event.target.role.value
        }
        if (request.last_name !== '' && request.first_name !== ''  && request.email !== '' && request.role !== '' ){
            handlerSignUp(request)
            event.target.reset();
            setErr(false)
        }else(
            setErr(true)
        )
        event.preventDefault() 
    }
    return(
        <form id='signup-form' onSubmit={(e)=>handlerSubmite(e)} className={style.FormSignUp}>
            <h1 className={style.FormSignUp__title}>Sign up!</h1>
            <InputsSignUpList/>
            <PacmanLoader loading={isloadingSignUp} color="#ff5770"  />
            {state.status !== '' &&<h2 style={{position: 'absolute', top: '80px'}}>{state.status}!</h2>}
            <Button type='submit' text='отправить' />
            {err && 
            <ErrorInput top='100px' color='red' left='80px'/>}
        </form>
    )
}

export {FormSignUp}