import style from './OutputField.module.sass'
const OutputField = ({value, text}: {value:string, text:string})=>{
    return(
        <div className={style.OutputField}>
            <div className={style.OutputField__text}>{text}</div>
            <div className={style.OutputField__value}>{value}</div>
        </div>
    )
}
export {OutputField}