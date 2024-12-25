import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getNewsById } from "../services/newsDetails-service.js";
import { updateNews } from "../services/newsCreator-service.js";

export function useEditNews(newsId) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [news, setNews] = useState({
        title: "",
        cardContent: "",
        mainContent: "",
        image: "",
        categories: "",
        date: "",
    });

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const data = await getNewsById(newsId);
                setNews(data);
            } catch (err) {
                setError("Failed to fetch news");
            } finally {
                setLoading(false);
            }
        };
        if (newsId) {
            fetchNews();
        }
    }, [newsId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNews((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateNews(newsId, news);
            alert("News updated successfully!");
            navigate("/all-news");
        } catch (err) {
            alert("Failed to update news.");
        }
    };

    return {news, loading, error, handleChange, handleSubmit,};
}
