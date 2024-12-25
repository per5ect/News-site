import axios from "axios";

const DB = "http://localhost:3000/users";

export const updateUserData = async (id, formData) => {
    const response = await axios.put(`${DB}/${id}`, formData);
    return response.data;
};