import React from "react";
import ToggleButtonComponent from "./ToggleButtonComponent";
import "./style/main-component.css";
import ToggleViewContainerComponent from "./ToggleViewContainerComponent";

import "./style/main-component.css";
export default class MainComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            isPlaceOrderView: true
        };
    }

    render(){
        return (    
            <div className="main-component">
                <ToggleButtonComponent  onClick={()=>this.onClickToggle()} view={this.state.isPlaceOrderView}/> 
                <ToggleViewContainerComponent view={this.state.isPlaceOrderView}/> 
            </div>
        );
    }

    onClickToggle(){
        this.setState({
            isPlaceOrderView: !this.state.isPlaceOrderView
        })
    }
}