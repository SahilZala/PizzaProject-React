import React from "react";
import { Container } from "react-bootstrap";
import CustomerBannerComponent from "./CustomerBannerComponent";
import NavbarComponent from "../NavbarComponent";
import MainComponent from "./MainComponent";

export default class CustomerHomeComponent extends React.Component
{
    render(){
        return (<div>
            <Container fluid>
                <NavbarComponent title="Customer Home"/>
                <CustomerBannerComponent/>
                <MainComponent/>
            </Container>
        </div>);
    }
}