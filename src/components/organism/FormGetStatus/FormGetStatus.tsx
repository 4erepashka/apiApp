import { InputSignUp } from "../../atoms/InputSignUp/InputSignUp"
import style from './FormGetStatus.module.sass'
import { PacmanLoader } from 'react-spinners';
import { useUserContext } from "../../../data/Context/useUserContext";
import { useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { ErrorInput } from "../../atoms/ErrorInput/ErrorInput";

const FormGetStatus = ()=>{
    const {handlerSetStatus, isloadingSetStatus, state} = useUserContext()
    const [err, setErr] = useState(false)
    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        const form = event.target as HTMLFormElement;
        const token = form.token.value;
        const status = form.status.value;
        console.log(token)
        if (token !== '' &&  status !== ''){
            handlerSetStatus(token, status)
            form.reset();
            setErr(false)
        }else{
            console.log('pfdd')
            setErr(true)
        }
           
        event.preventDefault() 
    }
    return(
        <form onSubmit={(e)=>handlerSubmit(e)} action="#" className={style.FormGetStatus}>
            <h1 className={style.FormGetStatus__text}>Установи статус записи в таблицу кандидатов</h1>
            <InputSignUp type='text' placeholder="token"  name="token"/>
            <InputSignUp type='text' placeholder="status"  name="status"/>
            <PacmanLoader loading={isloadingSetStatus} color="#ff5770"  />
            {err && 
            <ErrorInput top="80px" color="red" left="150px" />}
            {state.status !== '' &&<h2 style={{position: 'absolute', top: '90px', fontSize: '18px'}}>{state.status}!</h2>}
            {state.error !== '' &&<h2 style={{position: 'absolute', top: '150px'}}>{state.error}!</h2>}
            <Button type="submit" text="Установить статус"/>
        </form>
    )
}

export {FormGetStatus}
