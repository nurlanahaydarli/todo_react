import Input from "../Input/Input";
import Button from "../Button/Button";

const Modal=({onClose,singleData,changeEdit})=>{
   function submitEdit(e){
       e.preventDefault()
       singleData.name = e.target.name.value;
       singleData.desc = e.target.desc.value;
       changeEdit(singleData)
       onClose(false)
   }
    return(
        <>
            <div className="modal_box">
                <form action="" onSubmit={submitEdit}>
                    <Input  name={'name'} />
                    <Input  name={'desc'} />
                    <Button title={'Edit'} type={'submit'}/>
                </form>
            </div>
            <div onClick={onClose} className="modal_shadow"></div>
        </>
    )
}
export default Modal