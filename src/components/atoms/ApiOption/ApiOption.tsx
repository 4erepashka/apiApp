import styles from './ApiOption.module.sass'
import { ApiOptionParamsType } from './ApiOptionTypes'
import { useUserContext } from '../../../data/Context/useUserContext'
const ApiOption = ({text, action}:ApiOptionParamsType)=>{
    const {setOption, currentOption} = useUserContext()
    function handle(e: React.ChangeEvent<HTMLInputElement>){
        setOption(e.target.value)
    }
    return(
        <label htmlFor={action+'option'}  className={styles.Option}>
            <input checked= {currentOption === action} onChange={handle} value={action} className={styles.Option__input}type="radio" name="options" id={action+'option'} />
            <div className={styles.OptionText}>{text}</div>
            <div className={styles.OptionMarker}></div>
        </label>
    )
}

export {ApiOption}