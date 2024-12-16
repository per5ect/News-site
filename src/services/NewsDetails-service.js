import axios from "axios";

const DB = "http://localhost:3000";

export const getNewsById = async (id) => {
        const response = await axios.get(`${DB}/news/${id}`);
        return response.data;
}
