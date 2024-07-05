import grust from '../../../assets/grust.jpg'
import style from './ErrorInput.module.sass'
const ErrorInput = ({top, color, left}:{top: string, color: string, left: string})=>{
    return(
        <div style={{top: top, color: color, left: left}} className={style.ErrorInput} >
            <h2 className={style.ErrorInput__text}>заполните пожалуйста форму</h2>
            <img  className={style.ErrorInput__img}src={grust} alt="грустный хомяк" />
        </div>
    )
}
export {ErrorInput}