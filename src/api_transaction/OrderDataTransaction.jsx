import StorageCRUD from "../util/StorageCRUD";
export default class OrderDataTransaction {
    constructor()
    {
        let storage = new StorageCRUD();
        this.token = storage.getData("token");
    }    

    plceOrder(orderData){
        const header = {
            method: 'POST',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                Authorization: 'Bearer '+this.token,
            },
            body: JSON.stringify(orderData)
        };
        return fetch("https://pizza-project-4011.herokuapp.com/customer/place_order",header);
    }


    getMyOrderData(){
        const header = {
            method: 'GET',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                Authorization: 'Bearer '+this.token,
            },
        };
        return fetch("https://pizza-project-4011.herokuapp.com/customer/get_customer_order_data",header);
    }

    getOrderDataCount(){
        const header = {
            method: 'GET',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                Authorization: 'Bearer '+this.token,
            },
        };
        return fetch("https://pizza-project-4011.herokuapp.com/admin/get_order_data_count",header);
    }

    getAllOrderData(){
        const header = {
            method: 'GET',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                Authorization: 'Bearer '+this.token,
            },
        }
        return fetch("https://pizza-project-4011.herokuapp.com/admin/get_admin_order_data",header);

    }

    updateOrderData(orderData){
        const header = {
            method: 'PUT',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                Authorization: 'Bearer '+this.token,
            },
            body: JSON.stringify(orderData)
        }
        return fetch("https://pizza-project-4011.herokuapp.com/admin/udpate_admin_order_data",header);   
    }
}