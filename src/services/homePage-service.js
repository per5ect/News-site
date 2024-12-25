import axios from "axios";

const DB = "http://localhost:3000";

export const getAllNews = async () => {
        const response = await axios.get(`${DB}/news`);
        return response.data;
}

export const getLastNews = async () => {
        const response = await axios.get(`${DB}/news?_sort=-date&_order=desc&_limit=8`);
        return response.data;
}

export const getLast3News = async () => {
        const response = await axios.get(`${DB}/news?_sort=-date&_order=desc&_limit=3`);
        return response.data;
}

