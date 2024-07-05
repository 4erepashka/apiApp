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
    const handlerSubmite = (event: React.FormEvent<HTMLFormElement>)=>{
        const form = event.target as HTMLFormElement;
        const request = {
            "last_name": form.lastname.value,
            "first_name": form.firstname.value,
            "email": form.email.value,
            "role": form.value
        }
        if (request.last_name !== '' && request.first_name !== ''  && request.email !== '' && request.role !== '' ){
            form.reset();
            setErr(false)
        }else(
            setErr(true)
        )
        handlerSignUp(request)
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