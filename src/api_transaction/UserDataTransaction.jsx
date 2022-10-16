import StorageCRUD from "../util/StorageCRUD";
export default class UserDataTransaction{
    constructor(){
        let storage = new StorageCRUD();
        this.token = storage.getData("token");
    }

    getUserData(){
        const header = {
            method: 'GET',
            mode: 'cors',
            headers: { 
                Authorization: 'Bearer '+this.token,
            },
        };
        return fetch("https://pizza-project-4011.herokuapp.com/get_user_data",header);
    }

    getUserDataCount(){
        const header = {
            method: 'GET',
            mode: 'cors',
            headers: { 
                Authorization: 'Bearer '+this.token,
            },
        };
        return fetch("https://pizza-project-4011.herokuapp.com/admin/get_user_data_count",header);
    }
}