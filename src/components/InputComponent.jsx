import React from "react";
import { Form } from "react-bootstrap";
import './style/input-component.css';

export default class InputComponent extends React.Component{
    render(){
        return (<Form.Group controlId={this.props.controlId}>
            <Form.Label>{this.props.label}</Form.Label>
            <Form.Control type={this.props.type} value={this.props.data} onChange={(val)=>this.props.onChange(val.target.value)} placeholder={this.props.name} min={this.props.min}/>
        </Form.Group>);
    }
}