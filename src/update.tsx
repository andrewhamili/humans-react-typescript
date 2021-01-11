import React from 'react';
import { UpdateProps } from './Props';
import { UpdateState } from './States';
import {Container, Row, Col, Card, CardHeader, CardBody, Button} from 'reactstrap'

class Update extends React.Component<UpdateProps, UpdateState>{
    render(){
        console.log(this);
        return(
            <div className="App" >
                <Card>
                    <CardHeader>Update</CardHeader>
                    <CardBody>
                        <form>
                            <Row md="8" lg="8" className="form-group" >
                                <Col>First Name</Col>
                                <Col><input className="form-control" type="text" /> </Col>
                            </Row>
                            <Row md="8" lg="8" className="form-group" >
                                <Col>Last Name</Col>
                                <Col><input className="form-control" type="text" /> </Col>
                            </Row>
                            <Row className="form-group" >
                                <Col><Button color="success" >Update</Button></Col>
                            </Row>
                        </form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
export default Update;