import React from "react";
import "./style/toggle-button-component.css";
import { Button } from "react-bootstrap";
export default class ToggleButtonComponent extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            isOn: true
        }
    }



    render(){
        return (
            <div className="toggle-button-component">
               <Button className="m-1" onClick={()=>this.props.onClick()} style={this.props.view ?
                {background: '#2980B9',color: 'white',border: '#2980B9'} 
               : {background: '#F7F9F9',color: 'black',border: '#F7F9F9'}}>Place order</Button>

               <Button className="m-1" onClick={()=>this.props.onClick()} style={!this.props.view ?
                {background: '#F39C12',color: 'white',border: '#F39C12'} 
               : {background: '#F7F9F9',color: 'black',border: '#F7F9F9'}} >My orders</Button>

             
               
            </div>
        );
    }

    // onClickToggel(){
    //     this.setState({
    //         isOn: !this.state.isOn
    //     });
    // }
}