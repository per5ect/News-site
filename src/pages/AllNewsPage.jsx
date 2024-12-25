import {MainAllNews} from "../components/all-news-page/MainAllNews.jsx";
import {Footer} from "../components/globals/Footer/Footer.jsx";
import {Header} from "../components/globals/Header/Header.jsx";
import "../styles/all-news-page.scss"

export function AllNewsPage() {
    return (
        <>
            <Header/>
            <MainAllNews/>
            <Footer/>
        </>
    )
}