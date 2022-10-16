import React from "react";
import "./style/side-login-component.css";
import MainLoginComponent from "./MainLoginComponent";
export default class SideLoginComponent extends React.Component{
    render(){
        return (<div className="side-login-component">
            <MainLoginComponent/>
        </div>);
    }
}