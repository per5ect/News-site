import axios from "axios";

const DB = "http://localhost:3000/users";

export const getAllUsers = async () => {
    const response = await axios.get(`${DB}?role_ne=admin`);
    return response.data;
}

export const deleteUser = async (id) => {
    const response = await axios.delete(`${DB}/${id}`);
    return response.data;
}

export const createUser = async (user) => {
    const response = await axios.post(DB, user);
    return response.data;
}