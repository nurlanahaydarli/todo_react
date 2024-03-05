import Form from "./components/Form/Form";
import List from "./components/List/List";
import '../src/styles/style.css'
import {useState} from "react";
import Modal from "./components/Modal/Modal";


function App() {

    const [dataList, setDataList] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [singleData, setSingleData] = useState(false)

    function handleData(data) {
        let new_data = [data, ...dataList]
        setDataList(new_data)
    }

    function rmvData(id) {
        let data = dataList.filter((item) => {
            return item.id !== id
        })
        setDataList(data)
    }

    function editData(data) {
        setSingleData(data)
        setOpenModal(true)
    }

    function closeModal() {
        setOpenModal(false)
    }

    function changeEdit(data) {
        setSingleData(data)
    }

    return (
        <>
            <section className="main_content">
                <Form getData={handleData}/>
                <List onEdit={editData} onRemove={rmvData} list={dataList}/>
                {openModal ? <Modal changeEdit={changeEdit} onClose={closeModal} singleData={singleData}/> : ''}
            </section>
        </>
    )
}

export default App
