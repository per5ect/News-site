import { useState } from "react";
import { getAllNews } from "../services/homePage-service.js";

export function useAllNewsPage() {
    const [allNews, setAllNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [sortOrder, setSortOrder] = useState("new");
    const [selectedCategory, setSelectedCategory] = useState("");

    const fetchNews = async () => {
        try {
            const data = await getAllNews();
            setAllNews(data);
            const sortedData = sortNews(sortOrder, data);
            setFilteredNews(sortedData);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };


    const parseDate = (dateString) => {
        const [day, month, year] = dateString.split(".");
        return new Date(year, month - 1, day);
    };

    const sortNews = (order, news) => {
        return [...news].sort((a, b) => {
            const dateA = parseDate(a.date);
            const dateB = parseDate(b.date);
            return order === "old" ? dateA - dateB : dateB - dateA;
        });
    };

    const filterNewsByCategory = (category) => {
        if (!category) return allNews;
        return allNews.filter((news) => news.categories === category);
    };

    const updateFilteredNews = () => {
        let news = filterNewsByCategory(selectedCategory);
        news = sortNews(sortOrder, news);
        setFilteredNews(news);
    };

    return {
        allNews,
        filteredNews,
        sortOrder,
        setSortOrder,
        selectedCategory,
        setSelectedCategory,
        setFilteredNews,
        fetchNews,
        parseDate,
        sortNews,
        filterNewsByCategory,
        updateFilteredNews
    };
}
