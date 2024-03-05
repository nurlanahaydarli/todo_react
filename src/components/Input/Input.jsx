import React from "react";
import style from './Input.module.css'


const Input=({value,name,id,type='text',placeholder})=>{
    return(
        <>
            <input
                value={value}
                name={name}
                id={id}
                type={type}
                className={style.input_box}
                placeholder={placeholder}
            />
        </>
    )
}
export default Input
