import { useEffect } from "react";
import { MainHomeNewsSlider } from "./MainHomeNewsSlider.jsx";
import { ChevronRight } from "lucide-react";
import MainHomeNewsCards from "./MainHomeNewsCards.jsx";
import {useMainHome} from "../../hooks/useMainHome.js";

export function MainHome() {
    const {lastNews, sliderNews,fetchNews} = useMainHome()

    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <main className="mb-5">
            <MainHomeNewsSlider sliderNews={sliderNews} />
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mt-5">
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        <span className="dot"></span>
                        <h2 className="ms-3">Latest News</h2>
                    </div>
                    <a href="/all-news" className="btn btn-light">
                        See All
                        <ChevronRight />
                    </a>
                </div>
                <MainHomeNewsCards lastNews={lastNews}/>
            </div>
        </main>
    );
}
