// import "./List.css"
import { Button, Table, Col, Row, FloatingLabel, Form } from "react-bootstrap"


export default function List({ itemList, setItemList }) {

    const deleteItem = key => {
        const latestList = itemList.filter((item) => {
            return item.id !== key;
        })
        setItemList(latestList)

    }

    return (
        <div>
            <Table responsive striped bordered hover variant="dark" className="ListItem" >
                <thead>
                    <tr>
                        <th>Serial number</th>
                        <th>Company Name</th>
                        <th>Job Title</th>
                        <th>Job Link</th>
                        <th>Sent?</th>
                        <th>Employer Feedback</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {itemList.length > 0 && itemList.map((item, index) => (
                        <tr key={item.id}>
                            <><td className="serialNumber">{index + 1}</td>
                                <td className="companyName">{item.name}</td>
                                <td className="jobTitle">{item.title}</td>
                                <td className="jobLink">{item.link}</td>
                                <td><input type="checkbox" className="status"></input></td>
                                
                                <td>
                                    <Row className="g-2">
                                        <Col md>
                                            <FloatingLabel controlId="floatingSelectGrid">
                                                <Form.Select aria-label="Floating label select example">
                                                    <option>Select</option>
                                                    <option value="1">Waiting</option>
                                                    <option value="2">Interview</option>
                                                    <option value="3">Employed</option>
                                                    <option value="4">Rejected</option>
                                                </Form.Select>
                                            </FloatingLabel>
                                        </Col>
                                    </Row>
                                </td>
                                <td><Button className="Boot-btn" variant="outline-success" onClick={() => deleteItem(item.id)}>X</Button></td>
                            </>
                        </tr>
                    ))}

                </tbody>
            </Table>

        </div>
    )
}