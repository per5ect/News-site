import {Header} from "../components/globals/Header/Header.jsx";
import {Footer} from "../components/globals/Footer/Footer.jsx";
import {MainMyAccount} from "../components/my-account-page/MainMyAccount.jsx";
import "../styles/user-account-page.scss"

export function UserAccountPage() {
    return (
        <>
            <Header />
            <MainMyAccount/>
            <Footer/>
        </>
    )
}