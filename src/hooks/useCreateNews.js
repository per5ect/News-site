import { useState } from "react";
import { useSelector } from "react-redux";
import { createNews } from "../services/newsCreator-service.js";

export function useCreateNews() {
    const { user } = useSelector((state) => state.auth);

    const [title, setTitle] = useState("");
    const [cardContent, setCardContent] = useState("");
    const [mainContent, setMainContent] = useState("");
    const [categories, setCategories] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
    };

    const handleReset = () => {
        setTitle("");
        setCardContent("");
        setMainContent("");
        setCategories("");
        setImage("");
        setError(null);
        setSuccess(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !cardContent || !mainContent || !categories || !image) {
            setError("All fields are required");
            setSuccess(null);
            return;
        }

        const newsData = {
            title,
            cardContent,
            mainContent,
            categories,
            image,
            authorId: user?.id || "anonymous",
            date: new Date().toLocaleDateString(),
        };

        setIsLoading(true);

        try {
            await createNews(newsData);
            setSuccess("News created successfully!");
            setError(null);
            handleReset();
        } catch (err) {
            setError("Failed to create news");
            setSuccess(null);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        title,
        cardContent,
        mainContent,
        categories,
        image,
        error,
        success,
        isLoading,
        setTitle: handleInputChange(setTitle),
        setCardContent: handleInputChange(setCardContent),
        setMainContent: handleInputChange(setMainContent),
        setCategories: handleInputChange(setCategories),
        setImage: handleInputChange(setImage),
        handleSubmit,
        handleReset,
    };
}
