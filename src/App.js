
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { Button, Col, Form, Row, FloatingLabel } from "react-bootstrap"
import List from './components/List';
import { nanoid } from 'nanoid'


function App() {


    const [currentItem, setCurrentItem] = useState({ name: "",title: "", link:"", id: "todo-" + nanoid() })
    const [itemList, setItemList] = useState([])
    const changeHandler = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setCurrentItem({
            ...currentItem,[e.target.name]:value
        })
    }
    const addItemToList = () => {
        const newList = itemList
        setItemList(newList)
        newList.push(currentItem)
         setCurrentItem({ name: "",title: "", link:"", id: "todo-" + nanoid()})
    }

    const handleEnterKey = (event) => {
        if (event.key === "Enter") {
            addItemToList()
        }
    }
    // const handleSaveForm = (event) => {
    //     event.preventDefault()
    //     localStorage.setItem('myData', JSON.stringify(itemList));
    // }
    console.log("LOCALSTORAGE",localStorage.getItem('myData'))
    return (
        <div className="App">
            <div className="App-header">
                <h3>Job Application Manager</h3>
            </div>
            <div className="Wrapper">
                <Row className="g-2">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Company Name">
                            <Form.Control type="text"
                            value={currentItem.name}
                            name="name"
                            onKeyPress={handleEnterKey}
                            onChange={changeHandler} 
                            placeholder="Company name" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Job Title">
                            <Form.Control 
                               value={currentItem.title}
                               name="title"
                                onKeyPress={handleEnterKey}
                                onChange={changeHandler}
                                type="text" placeholder="job title" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Job Link">
                            <Form.Control type="text" 
                            value={currentItem.link}
                            name="link"
                            onKeyPress={handleEnterKey}
                            onChange={changeHandler}
                            placeholder="job link" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid">
                            <Button variant="info" className="Boot-btn" onClick={addItemToList}>+</Button>
                        </FloatingLabel>
                    </Col>

                </Row>
                <List itemList={itemList} setItemList={setItemList} />
                <h6 style={{ fontWeight: "bold" }}>Total Tasks: {itemList.length}</h6>
                <Button  variant="success" onClick={()=>localStorage.setItem('myData', JSON.stringify(itemList))}>Save Changes</Button>
            </div>
        </div>
    )
}

export default App;
