import {Header} from "../components/globals/Header/Header.jsx";
import {Footer} from "../components/globals/Footer/Footer.jsx";
import {MainCreateNewUser} from "../components/create-new-user-page/MainCreateNewUser.jsx";

export function CreateNewUserPage(){
    return(
        <>
            <Header />
            <MainCreateNewUser/>
            <Footer/>
        </>
    )
}