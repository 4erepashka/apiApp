import { OutputField } from "../../atoms/OutputField/OutputFIeld"
import style from './OutputView.module.sass'
const OutputeView = ({email, code, token}:{email:string, code:string, token:string}) =>{
    return(
        <div className={style.OutputView}>
            <OutputField text="Ваш email:" value={email}/>
            <OutputField text="Ваш код:" value={code} />
            <OutputField text="Ваш токен:" value={token} />
        </div>
    )
}

export {OutputeView}