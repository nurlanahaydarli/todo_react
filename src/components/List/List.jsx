import React from "react";
import Button from "../Button/Button";
import style from './List.module.css'



const List=({list,onRemove,onEdit})=>{
    return(
        <>
            {list.length?
            <ul className={style.todo_list}>
                {list.map((item) => (
                    <li key={item.id}>
                        <div className={style.list_name}>
                            <p>{item.name}</p>
                            <span>{item.desc}</span>
                        </div>
                        <div className="button_list">
                            <Button type={'button'} onClickId={()=>onEdit(item)} name={"edit"} title={'Edit'}/>
                            <Button type={'button'} onClickId={()=>onRemove(item.id)} name={'delete'} title={'Delete'}/>
                        </div>
                    </li>
                ))}
            </ul>:''
            }
        </>
    )
}
export default List
