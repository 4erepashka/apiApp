import style from './RoleImg.module.sass'
const RoleImg = ({path, descr}:{path:string, descr:string}) =>{
    return(
        <img className={style.RoleImg} src={path} alt={descr} />
    )
}

export {RoleImg}