import React, {useState} from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import style from './Form.module.css'
import { generateId } from "../../constant/constant";

const Form = ({getData}) => {
    const [formData,setFormData]= useState({name:'',desc:''})

    function submitForm(e){
        e.preventDefault()
        let id = generateId()
        let name = e.target.name.value;
        let desc = e.target.description.value;
        if(!name){
            return
        }
        let form={
            id,
            name,
            desc
        }
        getData(form)
        setFormData(form)
        e.target.name.value="";
        e.target.description.value="";
    }

    return (
        <>
            <div className={style.form_box}>
                <form action="" onSubmit={submitForm}>
                    <div>
                        <Input placeholder={'Todo name'} id={'name'} name={'name'}/>
                    </div>
                    <div>
                        <Input placeholder={'Todo description'} id={'desc'} name={'description'} />
                    </div>
                    <div>
                        <Button type={'submit'} name={'add'} title={"Add"}/>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Form
