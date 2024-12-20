import {HomePage} from "./pages/HomePage.jsx";
import {Routes,Route} from "react-router";
import {NewsDetailsPage} from "./pages/NewsDetailsPage.jsx";
import {LoginPage} from "./pages/LogInPage.jsx";


export function App () {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/news/:id" element={<NewsDetailsPage/>}/>
            <Route path="/logIn" element={<LoginPage/>}/>
        </Routes>
    )
}