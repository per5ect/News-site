import {Header} from "../components/globals/Header/Header.jsx";
import {MainHome} from "../components/home-page/MainHome.jsx";
import {Footer} from "../components/globals/Footer/Footer.jsx";
import "../styles/home-page.scss"

export function HomePage() {
    return (
        <>
            <Header/>
            <MainHome/>
            <Footer/>
        </>

    )
}