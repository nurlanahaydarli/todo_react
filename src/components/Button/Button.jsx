import React from "react";
import style from './Button.module.css'


const Button=({
    name="add",
    type,
    onClickId,
    title="button"})=>{
    return(
        <>
            <button onClick={onClickId} type={type} className={`${style.btn} ${style[name]}`}>{title}</button>
        </>
    )
}
export default Button
