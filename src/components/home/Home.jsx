import React from "react";
import StorageCRUD from "../../util/StorageCRUD";
import { Navigate } from "react-router-dom";
import TokenVerification from "../../util/TokenVerification";
import CustomerHomeComponent from "../customer_home/CustomerHomeComponent";
import AdminHomeComponent from "../admin_home/AdminHomeComponent";
export default class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            currentUser : '',
        }        
    }
    render(){
        if(this.state.currentUser === '')
            return (<h1>wait</h1>);
        else if(this.state.currentUser === 'Admin')
        {
            return (<AdminHomeComponent/>);
        }
        else if(this.state.currentUser === 'User'){
            return (<CustomerHomeComponent/>);
        }
        else{
           return ( <Navigate to='/login' />);
        }
    }

    componentDidMount(){
        let storageCRUD = new StorageCRUD();
        let token = storageCRUD.getData("token");
        
        if(token === 'null'){
            this.setState({
                currentUser: 'no user'
            });

        }
        else{
            let tokenVerification = new TokenVerification(token);
            tokenVerification.verifyUserData().then((response) => this.onSuccess(response));        
        }
            
    }


    onSuccess(response){
        if(response.status === 200){
            response.json().then(data => {
                if(data.data.roles === 'ROLE_USER')
                    this.setState({currentUser: 'User'});    
                else
                    this.setState({currentUser: 'Admin'});
            });
        }
        else{
            this.setState({
                currentUser: 'no user'
            });
        }
    }
}