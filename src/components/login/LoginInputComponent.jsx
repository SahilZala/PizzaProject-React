import React from "react";
import { Form } from "react-bootstrap";
import "./style/login-input-component.css";
export default class LoginInputComponent extends React.Component{
   
    render(){
        return (<>
        <Form.Group className="login-component-group" controlId="formBasicEmail">
            <Form.Label>{this.props.label}</Form.Label>
                <Form.Control type={this.props.type} className="login-component-control" onChange={(val)=>this.props.onChange(val.target.value)} placeholder={this.props.name}/>
        </Form.Group>
        </>);
    }
}