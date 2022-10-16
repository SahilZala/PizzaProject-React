class TokenVerification {
    token = '';
    constructor(token){
        this.token = token;
   }

   verifyUserData(){
    const requestOptions1 = {
        method: 'GET',
        mode: 'cors',
        headers: { 
            Authorization: 'Bearer '+this.token,
        },
    };
    return fetch("https://pizza-project-4011.herokuapp.com/get_user_data",requestOptions1);
   }
   
   
}

export default TokenVerification;