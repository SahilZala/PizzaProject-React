import React from "react";
import { Navigate } from "react-router-dom";
import StorageCRUD  from '../util/StorageCRUD';
import TokenVerification from "../util/TokenVerification";
export default class Index extends React.Component{
    constructor(){
        super();
        this.state = {
            renderUrl: '/'
        };   
    }
    componentDidMount(){
        let storageCrud = new StorageCRUD();
        let token = storageCrud.getData("token");
         if(token !== null){
            let tokenVerification = new TokenVerification(token);
            tokenVerification.verifyUserData().then(response => this.onTokenVerificationSuccess(response));
         }
         else{
            this.setState({renderUrl: '/login'});
         }
    }

    onTokenVerificationSuccess(response){
        if(response.status === 200){
            this.setState({renderUrl: '/home'});
        }
        else{
            this.setState({renderUrl: '/login'});
        }
    }

    render(){
        return (<div> 
            <Navigate to={this.state.renderUrl} />
        </div>);
    }
}