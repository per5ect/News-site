import {Header} from "../components/globals/Header/Header.jsx";
import {Footer} from "../components/globals/Footer/Footer.jsx";
import {NewsDetailsMain} from "../components/news-details-page/NewsDetailsMain.jsx";
import "../styles/news-details-page.scss"

export function NewsDetailsPage() {
    return (
        <>
            <Header/>
            <div className="d-flex flex-row container column-gap-4">
                <NewsDetailsMain/>
            </div>
            <Footer/>
        </>
    )
}