import React from "react";
import { Container } from "react-bootstrap";
import {Table} from "react-bootstrap";
import OrderDataTransaction from "../../api_transaction/OrderDataTransaction";
import CustomerOrderTableRowBody from "./CustomerOrderTableRowBody";

export default class ViewOrderContainerComponent extends React.Component{

    constructor(){
        super();

        this.state = {
            orderData: null
        }
    }

    componentDidMount(){
        let orderDataTransaction = new OrderDataTransaction();
        orderDataTransaction.getMyOrderData().then((response) =>this.onSuccess(response)); 
    }

    onSuccess(response){
        if(response.status === 200){
            response.json().then((data)=>{
                
                this.setState({
                    orderData: data.data
                });
            });
        }  
        else{

        }
    }

    render(){

        if(this.state.orderData !== null)
        {
            return (
                <Container fluid>
                    <Table striped>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Orderid</th>
                        <th scope="col">Toping</th>
                        <th scope="col">Order placed date</th>
                        <th scope="col">Delivery date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
        
                    {this.state.orderData.map(({key,value},index)=><CustomerOrderTableRowBody key={index} id={index+1} data={this.state.orderData[index]}/>)}
                   
                  </Table>
                  </Container>);
        }  
        else{
            return <h1>wait </h1>
        }
    }
}