import React from "react";
import StorageCRUD from '../../util/StorageCRUD';

export default function Logout(){
    let storage = new StorageCRUD();
    storage.saveData('token','null');

    return  (<div><h1>logout</h1></div>);   
}