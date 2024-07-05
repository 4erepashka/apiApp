import style from './InputsSignUp.module.sass'
import { InputSignUp } from '../../atoms/InputSignUp/InputSignUp'
const InputsSignUpList = ()=>{
    return(
        <div className={style.InputsSignUpList}>
            <InputSignUp type='text' name="lastname" placeholder='Фамилия'/>
            <InputSignUp type='text' name="firstname" placeholder='Имя'/>
            <InputSignUp type='email'name="email" placeholder='Email'/>
            <InputSignUp type='text' name="role" placeholder='Role'/>
        </div> 
    )
}

export {InputsSignUpList}