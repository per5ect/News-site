import {useParams} from "react-router-dom";
import {useState} from "react";
import {getNewsById} from "../services/newsDetails-service.js";

export function useNewsDetail() {
    const { id } = useParams();
    const [newsDetails, setNewsDetails] = useState(null);

    const fetchNewsData = async () => {
        const news = await getNewsById(id);
        console.log("data is loaded")
        setNewsDetails(news);
    };

    return {newsDetails, fetchNewsData,id };
}