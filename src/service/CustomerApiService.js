import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/users';

class ApiService {

    fetchUsers() {
        return axios.get("https://mocki.io/v1/68e054f7-fda8-4ced-a88d-6f5480b33d8c");
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post("" + USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}

export default new ApiService();