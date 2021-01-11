import React from 'react';
import { HomeProps } from './Props';
import { AppState, HomeState } from './States';
import {Table, Button, Modal, Card, CardHeader, CardBody, Row, Col} from 'reactstrap'
import {getHumans, addHuman, deleteHuman, updateHuman} from './api';
import { Route, Switch, Redirect } from 'react-router-dom';
import Update from './update';
import { IFormData } from './interfaces';

class Home extends React.Component<HomeProps, HomeState>{

    state: HomeState={
        human:[],
        id:0,
        openUpdateModal:false,
        openAddModal: false
    }
    componentDidMount(){
        getHumans(this);
    }
    handleUpdateHuman(id: number){
        this.setState({id:id, openUpdateModal:true});
    }
    closeUpdateModal(){
        this.setState({id:0, openUpdateModal:false});
    }
    closeAddModal(){
        this.setState({openAddModal: false});
    }
    openAddHumanModa(){
        this.setState({openAddModal:true});
    }
    handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData: IFormData = {};
        const data = new FormData(e.target as HTMLFormElement);
        for(var key of data.keys()){
            formData[key] = data.get(key);
        }

        addHuman(this, formData.first_name, formData.last_name);
        
    }
    handleDeleteHuman(id: number){
        deleteHuman(this, id);
    }
    handleSubmitUpdate(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData: IFormData = {};
        const data = new FormData(e.target as HTMLFormElement);
        for(var key of data.keys()){
            formData[key] = data.get(key);
        }

        updateHuman(this, this.state.id, formData.first_name, formData.last_name);
        
    }
    render(){
        return(
            <div className="App">
                <Modal isOpen={this.state.openUpdateModal} toggle={()=>this.closeUpdateModal()} >
                    <Card>
                        <CardHeader>Update</CardHeader>
                        <CardBody>
                            <form onSubmit={(e)=>this.handleSubmitUpdate(e)} >
                                <Row md="8" lg="8" className="form-group" >
                                    <Col>First Name</Col>
                                    <Col><input className="form-control" name="first_name" defaultValue={this.state.human.find(i=>i.id=this.state.id)?.first_name} type="text" /> </Col>
                                </Row>
                                <Row md="8" lg="8" className="form-group" >
                                    <Col>Last Name</Col>
                                    <Col><input className="form-control" name="last_name" type="text" defaultValue={this.state.human.find(i=>i.id=this.state.id)?.last_name} /> </Col>
                                </Row>
                                <Row className="form-group" >
                                    <Col><Button color="success" >Update</Button></Col>
                                </Row>
                            </form>
                        </CardBody>
                    </Card>
                </Modal>
                <Modal isOpen={this.state.openAddModal} toggle={()=>this.closeUpdateModal()} >
                    <Card>
                        <CardHeader>Add</CardHeader>
                        <CardBody>
                            <form onSubmit={(e)=>this.handleSubmit(e)} >
                                <Row md="8" lg="8" className="form-group" >
                                    <Col>First Name</Col>
                                    <Col><input className="form-control" type="text" name="first_name" defaultValue={this.state.human.find(i=>i.id=this.state.id)?.first_name} /> </Col>
                                </Row>
                                <Row md="8" lg="8" className="form-group" >
                                    <Col>Last Name</Col>
                                    <Col><input className="form-control" type="text" name="last_name" defaultValue={this.state.human.find(i=>i.id=this.state.id)?.last_name} /> </Col>
                                </Row>
                                <Row className="form-group" >
                                    <Col><Button color="success">Add</Button></Col>
                                </Row>
                            </form>
                        </CardBody>
                    </Card>
                </Modal>
                {this.state.human.length > 0 ? <Table responsive bordered striped >
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.human.map((item, index)=>
                        <tr key={index} >
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td><Button color="primary" onClick={()=>this.handleUpdateHuman(item[0])} >Update</Button><Button color="danger" onClick={()=>this.handleDeleteHuman(item[0])} >Delete</Button></td>
                        </tr>)}
                    </tbody>
                </Table> : <p>No records found</p>}
                <Button color="success" onClick={()=>this.openAddHumanModa()} >Add</Button>
            </div>
        );
    }
    

}
export default Home;