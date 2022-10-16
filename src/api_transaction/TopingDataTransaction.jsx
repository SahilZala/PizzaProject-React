import StorageCRUD from "../util/StorageCRUD";
export default class TopingDataTransaction{
    
    constructor(){

        let storage = new StorageCRUD();
        this.token = storage.getData("token");
    }

    getTopingData(){
        const header = {
            method: 'GET',
            mode: 'cors',
            headers: { 
                Authorization: 'Bearer '+this.token,
            },
        };
        return fetch("https://pizza-project-4011.herokuapp.com/get_toping_data",header);
    }

    

}