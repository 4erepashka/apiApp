import style from './Button.module.sass'
const Button = ({type, text}:{type:  "submit" | "reset" | "button" | undefined , text: string}) =>{
    return(
        <button className={style.Button} type={type} >{text}</button>
    )
}

export {Button}