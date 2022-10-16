import React from "react";
import { Form } from "react-bootstrap";
export default class SelectionComponentStatus extends React.Component{

    // this.props.onChange(this.props.data[val.target.value])

    render(){
        return (<>
        <Form.Group>
            <Form.Label>{this.props.label}</Form.Label>
            <Form.Select defaultValue={this.props.dafault} onChange={(val) => this.props.onChange(val.target.value)}>
                {this.props.data.map((value,key)=><option key={value} value={value}>{value}</option>)}
            </Form.Select>
        </Form.Group>
        </>);
    }
}