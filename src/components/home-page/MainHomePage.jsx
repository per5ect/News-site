import { useEffect, useState } from "react";
import {getAllNews} from "../../services/HomePage-service.js";
import { MainHomePageNewsSlider } from "./MainHomePageNewsSlider.jsx";
import { ChevronRight } from "lucide-react";
import MainHomePageNewsCards from "./MainHomePageNewsCards.jsx";

export function MainHomePage() {
    const [newsWithAuthors, setNewsWithAuthors] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
                const data = await getAllNews();
                setNewsWithAuthors(data);
                // console.log(getNewsWithAuthors())
        };

        fetchNews();
    }, []);

    return (
        <main className="mb-5">
            <MainHomePageNewsSlider />
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mt-5">
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        <span className="dot"></span>
                        <h2 className="ms-3">News</h2>
                    </div>

                    <button className="btn btn-light">
                        See All
                        <ChevronRight />
                    </button>
                </div>
                <MainHomePageNewsCards newsWithAuthors={newsWithAuthors} />
            </div>
        </main>
    );

}