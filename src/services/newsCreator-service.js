import axios from "axios";

const DB = "http://localhost:3000/news";

export const createNews = async (newsData) => {
    const response = await axios.post(DB, newsData);
    return response.data;
};

export const updateNews = async (id, updatedNews) => {
    const response = await axios.put(`${DB}/${id}`, updatedNews);
    return response.data;
};

export const deleteNews = async (id) => {
    const response = await axios.delete(`${DB}/${id}`);
    return response.data;
}