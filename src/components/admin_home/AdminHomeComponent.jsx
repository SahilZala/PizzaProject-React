import React from "react";
import { Container } from "react-bootstrap";
import NavbarComponent from "../NavbarComponent";
import CounterContainer from "./CounterContainer";
import UserOrderContaierComponent from "./UserOrderContainerComponent";

export default class AdminHomeComponent extends React.Component
{
    render(){
        return <Container fluid>
            <NavbarComponent title = "Admin Home"/>
            <br/>
            <CounterContainer/>
            <br/>
            <UserOrderContaierComponent/>
            

        </Container>;
    }
}