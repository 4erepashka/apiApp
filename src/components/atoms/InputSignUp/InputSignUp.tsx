import style from './InputSignUp.module.sass'
const InputSignUp = ({type, placeholder, name}:{type:string, placeholder:string, name: string})=>{
    return(
        <div className={style.InputSignUpWrapper}>
            <input className={style.InputSignUp} name={name} type={type} id={name} placeholder={placeholder}/>
        </div>
    )
}

export {InputSignUp}