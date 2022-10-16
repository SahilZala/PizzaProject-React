import React from "react";
import PlaceOrderContainerComponent from "./PlaceOrderContainerComponent";
import ViewOrderContainerComponent from "./ViewOrderContainerComponent";
import './style/toggle-view-container-component.css';
export default class ToggleViewContainerComponent extends React.Component{
    
    render(){
        return (
            <div className="toggle-view-container-component" >
                <ToggleViewComponent view={this.props.view}/>
            </div>
        );
    }
}

function ToggleViewComponent (props){
    if(props.view)
        return (<div><PlaceOrderContainerComponent/></div>);
    else
        return (<div><ViewOrderContainerComponent/></div>);
        
}