import {Header} from "../components/globals/Header/Header.jsx";
import {Footer} from "../components/globals/Footer/Footer.jsx";
import {MainEditNews} from "../components/edit-news-page/MainEditNews.jsx";
import "../styles/edit-news-page.scss"

export function EditNewsPage () {
    return (
        <>
            <Header/>
            <MainEditNews />
            <Footer/>
        </>
    )
}