
import React from "react";
import { Table,Container } from "react-bootstrap";
import TotalOrdersRowBody from "./TotalOrdersRowBody";
import OrderDataTransaction from "../../api_transaction/OrderDataTransaction";
import TopingDataTransaction from "../../api_transaction/TopingDataTransaction";

export default class UserOrderContaierComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            orderData : null,
            topingData : null,
            statusList: [
                'WAIT',
                'SUCCESS',
                'REJECT',
                'COMPLETED'
            ]
        }
    }

    componentDidMount(){
        let topingData = new TopingDataTransaction();
        topingData.getTopingData().then((response) => this.onTopingSuccess(response));
        let orderDataTransaction = new OrderDataTransaction();
        orderDataTransaction.getAllOrderData().then((response) =>this.onSuccess(response)); 
    }

    onTopingSuccess(response){
        response.json().then((data) => {
            this.setState({
                topingData: data.data
            });
           
        });
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
        if(this.state.orderData !== null && this.state.topingData !== null)
        {
            return (
                <Container fluid>
                    <Table striped="columns" bordered hover>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Orderid</th>
                        <th scope="col">Username</th>
                        <th scope="col">Address</th>
                        <th scope="col">Toping</th>
                        <th scope="col">Order placed date</th>
                        <th scope="col">Delivery date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
        
                    {this.state.orderData.map(({key,value},index)=><TotalOrdersRowBody updateData={(id) => this.updateData(id)}  onStatusDataChange={(n,id)=>this.onStatusDataChange(n,id)} onTopingDataChange={(n,id)=>this.onTopingDataChange(n,id)} statusList={this.state.statusList} key={index} id={index+1} topingData = {this.state.topingData} data={this.state.orderData[index]}/>)}
                   
                  </Table>
                  </Container>);
        }  
        else{
            return <h1>wait </h1>
        }
    }

    onTopingDataChange(n,index){

        let val = this.state.orderData;

        val[index].toping = n;
        val[index].totalPrice = 350+n.price;

        this.setState({
            orderData: val,
        });
        console.log(this.state.orderData);
        
    }

    onStatusDataChange(n,index){

        let val = this.state.orderData;

        val[index].status = n;
    
        this.setState({
            orderData: val,
        });
    }

    updateData(id){
        let orderDataTransaction = new OrderDataTransaction();
        orderDataTransaction.updateOrderData(this.state.orderData[id]).then((response) => {
            if(response.status === 200)
            {
                alert("Data updated succesfully");
            }
            else{
                alert("Data not updated");
            }
        });
    }
}