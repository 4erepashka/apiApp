import { InputSignUp } from "../../atoms/InputSignUp/InputSignUp"
import style from './FormGetCode.module.sass'
import { useUserContext } from "../../../data/Context/useUserContext"
import { useState } from "react"
import { PacmanLoader } from 'react-spinners';
import { OutputeView } from "../OutputView/OutputeView"
import { Button } from "../../atoms/Button/Button"
import { ErrorInput } from "../../atoms/ErrorInput/ErrorInput"
const FormGetCode = () =>{
    const {handlerGetCode, isloadingGetCode, state} = useUserContext()
    const [err, setErr] = useState(false)
    const handlerSubmite = (event: React.FormEvent<HTMLFormElement>)=>{
        const form = event.target as HTMLFormElement;
        const email = form.email.value;
        if (email !== ''){
            handlerGetCode(email)
            form.reset();
            setErr(false)
        }else{
            console.log('pfdd')
            setErr(true)
        }
           
        event.preventDefault() 
    }
    return(
        <form action="#" onSubmit={(e)=>handlerSubmite(e)} className={style.FormGetCode}>
            <h1 className={style.FormGetCode__title}>Получи свой код!</h1>
            <InputSignUp type="email"  name="email" placeholder="email"/>
            <PacmanLoader loading={isloadingGetCode} color="#ff5770"  />
            <Button type="submit" text="Получить свой код" />
            {err && 
            <ErrorInput top="80px" color="red" left="150px" />}
            {state.code && <OutputeView email={state.email} code={state.code} token={state.token}/>}
            {state.error !== '' &&<h2 style={{position: 'absolute', top: '100px'}}>{state.error}!</h2>}

        </form>
    )
}

export {FormGetCode}