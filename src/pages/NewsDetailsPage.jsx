import {Header} from "../components/globals/Header/Header.jsx";
import {Footer} from "../components/globals/Footer/Footer.jsx";
import {NewsDetailsMain} from "../components/news-details/NewsDetailsMain.jsx";
// import {SectionASide} from "../components/news-details/SectionASide.jsx";

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