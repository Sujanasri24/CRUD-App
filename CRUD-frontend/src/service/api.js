// import axios from 'axios'

// const API_URL = 'http://localhost:8080'  //before writing here mention script in package.json. run the command npm run json-server. it will give URL.

// export const addUser = async (user) => {
//     try {
//         return await axios.post(`${API_URL}/user`, user);
//     } catch(error) {
//         console.log("Error while calling addUser api", error.message);
//     }
// }

// export const getUsers = async () => {
//     try{
//         return await axios.get(`${API_URL}/user`);

//     }catch(error){
//         console.log("Error while calling getUsers api", error.message);
//     }
// }

// export const getUser = async (id) => {
//     try{
//         return await axios.get(`${API_URL}/${id}`);

//     }catch(error){
//         console.log("Error while calling getUser api", error.message);
//     }
// }

// export const editUser = async (data, id) => {
//     try {
//         return await axios.put(`${API_URL}/${id}` , data)
//     } catch(error) {
//         console.log("Error while calling editUser api", error.message);
//     }

// }
 
// export const deleteUser= async (id) => {
//     try {
//         return await axios.delete(`${API_URL}/${id}`);
//     } catch(error) {
//         console.log("Error while calling deleteUser api", error.message);
    
//     }
// }

// import axios from 'axios';

// const usersUrl = 'http://localhost:3002';


// export const getUsers = async (id) => {
//     id = id || '';
//     try {
//         return await axios.get(`${usersUrl}/users/${id}`);
//     } catch (error) {
//         console.log('Error while calling getUsers api ', error);
//     }
// }

// export const addUser = async (user) => {
//     return await axios.post(`${usersUrl}/user`, user);
// }

// export const deleteUser = async (id) => {
//     return await axios.delete(`${usersUrl}/${id}`);
// }

// export const editUser = async (id, user) => {
//     return await axios.put(`${usersUrl}/${id}`, user)
// }

import axios from 'axios';

const usersUrl = 'http://localhost:8080';


export const getUsers = async (id) => {
    // id = id || '';
    try {
        return await axios.get(`${usersUrl}/users`);
    } catch (error) {
        console.log('Error while calling getUsers api ', error);
    }
}

export const getUser = async (id) => {
        try{
            return await axios.get(`${usersUrl}/users/${id}`);
    
        }catch(error){
            console.log("Error while calling getUser api", error.message);
        }
    }
    

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/users`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/users/${id}`);
}

export const editUser = async (user, id) => {
    return await axios.put(`${usersUrl}/user`, user)
}