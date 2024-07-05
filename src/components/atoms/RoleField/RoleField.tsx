import { RoleFieldPropsType } from './RoleFieldTypes'
import style from './RoleField.module.sass'
const RoleField = ({text}: RoleFieldPropsType) =>{
    return(
        <div className={style.RoleField}>
            {text}
        </div>
    )
}

export {RoleField}