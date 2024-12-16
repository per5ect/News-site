import {HomePage} from "./pages/HomePage.jsx";
import {Routes,Route} from "react-router";
import {NewsDetailsPage} from "./pages/NewsDetailsPage.jsx";


export function App () {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/news/:id" element={<NewsDetailsPage/>}/>
        </Routes>
    )
}