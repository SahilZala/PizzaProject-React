import React from "react";
import { Container } from "react-bootstrap";
import "./style/login-component.css";
import SideLoginComponent from "./SideLoginComponent";
import SideImageComponent from "./SideImageComponent";
import {Row,Col} from "react-bootstrap";

export default class LoginComponent extends React.Component{
    render(){
        return(
                <Container fluid>
                    <Row xs="auto">
                        <Col xs={5}>
                            <SideLoginComponent/>
                        </Col>
                        <Col xs={7}>
                            <SideImageComponent/>
                        </Col>
                    </Row>
                </Container>
        )
    }
}