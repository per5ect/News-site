import axios from "axios";

const apiDB = axios.create({
    baseURL: "http://localhost:3000",
});

export const getNews = async () => {
    const response = await apiDB.get("/news");
    return response.data;
};

export  const getAuthor = async() => {
    const response = await apiDB.get("/users?role=news-creator");
    return response.data;
}

export const getNewsWithAuthors = async() =>{
    try {
        // Получаем новости и авторов параллельно
        const [news, users] = await Promise.all([getNews(), getAuthor()]);

        // Объединяем новости с информацией об авторах
        return news.map(newsItem => {
            const author = users.find((user) => user.id === newsItem.authorId);
            return {
                ...newsItem,
                author: author || null,
            };
        });
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        throw error;
    }
};