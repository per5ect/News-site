import {Header} from "../components/globals/Header/Header.jsx";
import {Footer} from "../components/globals/Footer/Footer.jsx";
import {MainAllUsers} from "../components/all-users-page/MainAllUsers.jsx";
import "../styles/all-users-page.scss"

export function AllUsersPage() {
    return (
        <>
            <Header/>
            <MainAllUsers/>
            <Footer/>
        </>
    )
}