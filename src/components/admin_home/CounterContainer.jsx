import React from "react";
import { Container } from "react-bootstrap";
import './style/counter-container.css';
import Counter from "./Counter";
import {Row,Col} from "react-bootstrap";
import UserDataTransaction from "../../api_transaction/UserDataTransaction";
import OrderDataTransaction from "../../api_transaction/OrderDataTransaction";
export default class CounterContainer extends React.Component{
    
    constructor(){
        super();
        this.state = {
            userCount: 0,
            orderCount: 0
        }
    }
    componentDidMount(){
        let userDataTransaction = new UserDataTransaction();
        userDataTransaction.getUserDataCount().then((response) => this.onUserDataCountSuccess(response));
        let orderDataTransaction = new OrderDataTransaction();
        orderDataTransaction.getOrderDataCount().then((response)=>this.onOrderDataCountSuccess(response));
    }

    onUserDataCountSuccess(response){
        if(response.status === 200)
        {
            response.json().then((data) => {
                this.setState({
                    userCount: data.data
                });
                
            });
        }
        else{
            alert("Something went wrong.");
        }
    }

    onOrderDataCountSuccess(response){
        if(response.status === 200)
        {
            response.json().then((data) => {
                this.setState({
                    orderCount: data.data
                });
                
            });
        }
        else{
            alert("Something went wrong.");
        }
    }

    render(){
        return (
            <Container fluid className="counter-container">
                <Row xs="auto">
                    <Col>
                        <Counter bgColor="#B2BABB" title="User Count" count={this.state.userCount}/>
                    </Col>
                    <Col>
                        <Counter bgColor="#D4AC0D"  title="Order Count" count={this.state.orderCount}/>
                    </Col>
                </Row>    
            </Container>
        )
    };
}