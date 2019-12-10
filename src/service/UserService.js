import axios from 'axios'
const API_URL = 'http://localhost:8082/users';


class UserService{
    getUser(account){
        return axios.get(`${API_URL}?username=` + account);
    }

    getAllUsers(){
        return axios.get(`${API_URL}/`);
    }
}

export default new UserService();