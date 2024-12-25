import { MainAllNewsCards } from "./MainAllNewsCards.jsx";
import {useAllNewsPage} from "../../hooks/useAllNewsPage.js";
import {useEffect} from "react";
import {MainAllNewsFilterButtons} from "./MainAllNewsFilterButtons.jsx";

export function MainAllNews() {
    const {filteredNews, sortOrder, setSortOrder, selectedCategory, setSelectedCategory,
            fetchNews, updateFilteredNews,} = useAllNewsPage();

    useEffect(() => {
        fetchNews();
    }, []);

    useEffect(() => {
        updateFilteredNews();
    }, [sortOrder, selectedCategory]);

    return (
        <main className="mt-5 mb-5">
            <div className="container">
                <div className="d-flex justify-content-between all-news-title-btns">
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        <span className="dot"></span>
                        <h2 className="ms-3 mb-3">All {
                            selectedCategory === "Sport" ? "Sport" :
                                selectedCategory === "Technology" ? "Technology" :
                                    selectedCategory === "Politics" ? "Politics" : null
                        }News</h2>
                    </div>
                    <MainAllNewsFilterButtons setSortOrder={setSortOrder} selectedCategory={selectedCategory}   setSelectedCategory={setSelectedCategory} />
                </div>
                <MainAllNewsCards allNews={filteredNews} />
            </div>
        </main>
    );
}
