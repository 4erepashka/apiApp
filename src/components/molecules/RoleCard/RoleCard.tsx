import { RoleField } from "../../atoms/RoleField/RoleField"
import { RoleImg } from "../../atoms/RoleImg/RoleImg"
import style from './RoleCard.module.sass'
const RoleCard = ({text, path}: {text: string, path: string}) =>{
    return(
        <div className={style.RoleCard}>
            <RoleImg path={path} descr={text}/>
            <RoleField text= {text}/>
        </div>
    )
}

export {RoleCard}