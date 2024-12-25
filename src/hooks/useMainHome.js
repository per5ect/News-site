import {useState} from "react";
import {getLast3News, getLastNews} from "../services/homePage-service.js";
import {useSelector} from "react-redux";
import {deleteNews} from "../services/newsCreator-service.js";

export function useMainHome() {
    const [lastNews, setLastNews] = useState([]);
    const [sliderNews, setSliderNews] = useState([]);
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    const fetchNews = async () => {
            const data = await getLastNews();
            const lastNews = await getLast3News();
            setLastNews(data);
            setSliderNews(lastNews)
        };

    const handleDelete = async (id) => {
        try {
            await deleteNews(id);
            window.location.reload();
        } catch (error) {
            console.error("Error deleting news:", error);
            alert("Failed to delete the news. Please try again.");
        }
    };

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    };

    return {lastNews, sliderNews,fetchNews, handleDelete, truncateText, user, isAuthenticated};
}