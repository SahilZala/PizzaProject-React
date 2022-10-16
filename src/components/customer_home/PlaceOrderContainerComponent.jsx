import React from "react";
import InputComponent from "../InputComponent";
import { Row,Col } from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Button} from "react-bootstrap";
import "./style/place-order-container-component.css";

import SelectionComponent from "../SelectionComponent";
import TopingDataTransaction from "../../api_transaction/TopingDataTransaction";
import UserDataTransaction from "../../api_transaction/UserDataTransaction";
import OrderDataTransaction from "../../api_transaction/OrderDataTransaction";

export default class PlaceOrderContainerComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            userData: null,
            name: '',
            address: '',
            mobileNo: '',
            emailId: '',
            deliverDate: '',
            finalPrice: 350,
            topingId: 0,
            topingData: null,
        };
    }
    render(){
        if(this.state.topingData !== null) {
        return (
            <Container fluid>
                <Row>
                    <Col xs={6}>
                        <InputComponent type="text" label="Name" data={this.state.name} controlId="name" onChange={(val)=>this.onUserNameChange(val)}/>
                    </Col>
                    <Col xs={6}>
                        <InputComponent type="text" label="Address" data={this.state.address} controlId="address" onChange={(val)=>this.onAddressChange(val)}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xs={6}>
                        <InputComponent type="email" label="Email Id" data={this.state.emailId} controlId="emailId" onChange={(val)=>this.onEmailIdChange(val)}/>
                    </Col>
                    <Col xs={6}>
                        <InputComponent type="number" label="Mobile Number" data={this.state.mobileNo} controlId="mobileNo" onChange={(val)=>this.onMobileNoChange(val)}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    
                    <Col xs={6}>
                        <SelectionComponent type="text" data={this.state.topingData} label="Toping" topingId={2} controlId="topingId" onChange={(val) => this.onTopingDataChange(val)}/>
                    </Col>
                    
                    <Col xs={6}>
                        <InputComponent type="date" label="Delivery Date" data={this.state.deliverDate} controId="deliveryDate" onChange={(val)=>this.onDeliverDateChange(val)} min={this.getCurrentDate()}/>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row>
                    <Col xs={6}>
                        <Button className="place-order-submit-button" onClick={()=>this.placeOrder()}>Place order</Button>
                    </Col>
                    <Col xs={6}>
                        <div className="final-price">Final price: {this.state.finalPrice}</div>
                    </Col>
                </Row>
                <br/>
                <br/>
            </Container>
        ) 
        }
        else{
            return (<></>);
        }
    }

    componentDidMount(){
        let topingData = new TopingDataTransaction();
        topingData.getTopingData().then((response) => this.onTopingSuccess(response));
        let userData = new UserDataTransaction();
        userData.getUserData().then((response)=>this.onUserDataSuccess(response));  
    }

    onTopingSuccess(response){
        response.json().then((data) => {
            this.setState({
                topingData: data.data,
                topingId: data.data[0]
            });
           
        });
    }
    
    onUserDataSuccess(response){
        response.json().then((data) => {
            this.setState({
                name: data.data.myName,
                address: data.data.address,
                mobileNo: data.data.mobileNo,
                emailId: data.data.emailId,
                userData: data.data
            });
        });
    }

    
    onUserNameChange(n){
        let user = this.state.userData;
        user.myName = n;
        this.setState({
            name: n,
            userData: user
        });
    }

    onAddressChange(n){
        let user = this.state.userData;
        user.address = n;
        this.setState({
            address: n,
            userData: user
        });
    }

    onMobileNoChange(n){
        let user = this.state.userData;
        user.mobileNo = n;
        this.setState({
            mobileNo: n,
            userData: user
        });
    }

    onEmailIdChange(n){
        let user = this.state.userData;
        user.emailId = n;
        this.setState({
            emailId: n,
            userData: user
        });
    }

    onDeliverDateChange(n){
        this.setState({
            deliverDate: n,
        });
    }

    onTopingDataChange(n){
        this.setState({
            topingId: n,
            finalPrice: 350 + n.price
        });
    }

    getCurrentDate()
    {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        return today;
    }

    
    placeOrder(){
        console.log(this.state.topingId);
        let orderDataTransaction = new OrderDataTransaction();
        orderDataTransaction.plceOrder({
            status: "WAIT",
            orderReceivedDate: this.getCurrentDate(),
            orderDeliveryDate: this.state.deliverDate,
            totalPrice: this.state.finalPrice,
            user: this.state.userData,
            toping: this.state.topingId

        }).then((response) => this.onPlaceOrderSuccess(response));
    }

    onPlaceOrderSuccess(response)
    {
        if(response.status === 200)
        {
            alert("order placed succesfully.");
        }
        else{
            alert("!something went wrong, try letter");
        }
    }
    
}