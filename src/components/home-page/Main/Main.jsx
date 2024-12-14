import {MainNewsSlider} from "./MainNewsSlider.jsx";
import MainNewsCards from "./MainNewsCards.jsx";
import {ChevronRight} from "lucide-react";
import {getNewsWithAuthors, getNews} from "../../../services/mainPage-service.js"
import {useEffect, useState} from "react";

export function Main() {
    const [newsWithAuthors, setNewsWithAuthors] = useState([]);

    useEffect(() => {
        const getNewsData = async () => {
                const data = await getNewsWithAuthors();
            console.log(getNewsWithAuthors())
            // console.log(getNews())
            setNewsWithAuthors(data);
        };

        getNewsData();
    }, []);

    return (
        <main className="mb-5">
            <MainNewsSlider/>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mt-5">
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        <span className="dot"></span>
                        <h2 className="ms-3">News</h2>
                    </div>

                    <button className="btn btn-light">
                        See All
                        <ChevronRight /></button>
                </div>
                <MainNewsCards newsWithAuthors={newsWithAuthors}/>
            </div>
        </main>
    )
}