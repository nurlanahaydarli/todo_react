import Input from "../Input/Input";
import Button from "../Button/Button";
import {useState} from "react";

const Modal = ({onClose, singleData, changeEdit}) => {
    function submitEdit(e) {
        e.preventDefault()
        singleData.name = e.target.name.value;
        singleData.desc = e.target.desc.value;
        changeEdit(singleData)
        onClose(false)
    }

    return (
        <>
            <div className="modal_box">
                <h2>Edit data</h2>
                <form action="" onSubmit={submitEdit}>
                    <Input placeholder={'Name'}  name={'name'}/>
                    <Input placeholder={'Description'}  name={'desc'}/>
                    <Button title={'Edit'} type={'submit'}/>
                </form>
            </div>
            <div onClick={onClose} className="modal_shadow"></div>
        </>
    )
}
export default Modal