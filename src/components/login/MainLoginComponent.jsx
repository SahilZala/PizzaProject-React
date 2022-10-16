import React from "react";
import { Row,Col } from "react-bootstrap";
import "./style/main-login-component.css";
import LoginLogoComponent from "./LoginLogoComponent";
import LoginInputComponent from "./LoginInputComponent";
import LoginButtonComponent from "./LoginButtonComponent";
import { useNavigate } from "react-router-dom";
//import TokenVerification from "../../util/TokenVerification";
import StorageCRUD from "../../util/StorageCRUD";

class MainLoginClassComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }
    setUserName(name){
        this.setState({
            userName: name
        });
    }

    setPassword(pass){
        
        this.setState({
            password: pass
        });
    }

    render(){
        return (
            <div className="main-login-component">
                <Col>
                    <Row>
                        <LoginLogoComponent/>
                        <br/>
                        <LoginInputComponent onChange={(user) => this.setUserName(user)} name="username" type="text" label="User Name:"/>
                        <br/>
                        <LoginInputComponent onChange={(pass) => this.setPassword(pass)} name="password" type="password" label="Password: " />
                        <br/>
                        <LoginButtonComponent onClick={()=>this.login()}/>
                    </Row>
                </Col>
            </div>
        );
    }

    login() {   
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '},
            body: JSON.stringify({ userName: this.state.userName,password: this.state.password})
        };
        fetch("https://pizza-project-4011.herokuapp.com/login",requestOptions)
        .then(response => this.onSuccess(response));
    }   

    onSuccess(data)
    {
        if(data.status === 200){
            data.json().then(data => {
                let storage = new StorageCRUD();
                storage.saveData('token',data.data.token);
                this.props.navigate('/home');
            });
        }
        else{
            data.json().then(data => {
                alert(data.error);    
            });  
        }
    }
}

export default function MainLoginComponent(){
    let navigate = useNavigate();
    return <MainLoginClassComponent navigate={navigate}/>;
}