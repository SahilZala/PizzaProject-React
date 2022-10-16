import React from "react";
import './style/counter.css';
import { Row,Col } from "react-bootstrap";
import {Container} from "react-bootstrap";
export default class Counter extends React.Component{
    render(){
        return <div className="counter" style={
            {background: this.props.bgColor}
        }>
            <Container fluid> 
                <Row>
                    <Col>
                        <div className="counter-val">{this.props.count}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="counter-title">{this.props.title}</div>
                    </Col>
                </Row>
            </Container>
        </div>;
    }
}