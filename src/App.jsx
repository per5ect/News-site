import {HomePage} from "./pages/Home Page/HomePage.jsx";
import {Routes} from "react-router";
import {Route} from "lucide-react";


export function App () {
    return (
        <Routes>
            <Route path="/" component={HomePage}/>
        </Routes>
    )
}