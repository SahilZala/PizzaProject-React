export default class StorageCRUD{
    saveData(key,data){
        localStorage.setItem(key,data);
    }    
    
    getData(key){
        return localStorage.getItem(key);
    }

    removeData(key){
       localStorage.removeItem('key'); 
    }

    removeAll(){
        localStorage.clear();
    }
}