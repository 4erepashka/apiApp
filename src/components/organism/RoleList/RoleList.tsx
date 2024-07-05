import { RoleCard } from '../../molecules/RoleCard/RoleCard'
import style from './RoleList.module.sass'
import avs from '../../../roleIcons.json'
interface IRoleListProps {
    roles: {
        roles: string[]; // Предполагаем, что roles - это массив строк
    };
}
const RoleList = ({roles}:IRoleListProps)=>{
    return(
        <div className={style.RoleList}>
            {
                roles.roles && roles.roles.map(
                    (item,index)=>{
                        return <RoleCard key = {index} text = {item} path={avs.filter(obj=>obj.role === item)[0].path}/>
                    }
                )
        }                
        </div>
    )
}

export {RoleList}