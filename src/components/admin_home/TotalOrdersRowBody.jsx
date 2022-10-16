import React from "react";
import SelectionComponent from "../SelectionComponent";
import SelectionComponentStatus from "../SelectionComponentStatus";
import { Button } from "react-bootstrap";
export default class TotalOrdersRowBody extends React.Component{

    render(){
            return (
                <tbody>
                <tr>
                <td>{this.props.id}</td>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.user.myName}</td>
                <td>{this.props.data.user.address}</td>
                <td><SelectionComponent type="text" data={this.props.topingData} label="" topingId={this.props.data.toping.id} controlId="topingId" onChange={(val) => this.onTopingDataChange(val)}/></td>
{/*     
                <td>{this.props.data.toping.topingName}</td> */}
                <td>{this.props.data.orderReceivedDate}</td>
                <td>{this.props.data.orderDeliveryDate}</td>
                <td><SelectionComponentStatus type="text" data={this.props.statusList} label="" dafault={this.props.data.status} onChange={(val) => this.onStatusDataChange(val)}/></td>
                <td>{this.props.data.totalPrice}</td>
                <td><Button onClick={()=>this.props.updateData(this.props.id-1)}>UPDATE</Button></td>
                </tr>
            </tbody>
            );
        
    }

    onTopingDataChange(n){
        
        console.log(this.props.id);
        this.props.onTopingDataChange(n,this.props.id-1);
        
    }

    onStatusDataChange(n){
        this.props.onStatusDataChange(n,this.props.id-1);
        
    }
    
}