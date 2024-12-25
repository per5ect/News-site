import {HomePage} from "./pages/HomePage.jsx";
import {Routes, Route} from "react-router";
import {NewsDetailsPage} from "./pages/NewsDetailsPage.jsx";
import {LoginPage} from "./pages/LogInPage.jsx";
import {CreateNewsPage} from "./pages/CreateNewsPage.jsx";
import {AllNewsPage} from "./pages/AllNewsPage.jsx";
import {EditNewsPage} from "./pages/EditNewsPage.jsx";
import {UserAccountPage} from "./pages/UserAccountPage.jsx";
import {AllUsersPage} from "./pages/AllUsersPage.jsx";
import {CreateNewUserPage} from "./pages/CreateNewUserPage.jsx";
import {ProtectedRoutes} from "./router/ProtectedRoutes.jsx";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/all-news/:id" element={<NewsDetailsPage />} />
            <Route path="/logIn" element={<LoginPage />} />
            <Route path="/all-news" element={<AllNewsPage />} />

            <Route element={<ProtectedRoutes />}>
                <Route path="/my-account" element={<UserAccountPage />} />
            </Route>

            <Route element={<ProtectedRoutes roles={["news-creator"]} />}>
                <Route path="/create-news" element={<CreateNewsPage />} />
                <Route path="/edit-news/:id" element={<EditNewsPage />} />
            </Route>

            <Route element={<ProtectedRoutes roles={["admin"]} />}>
                <Route path="/all-users" element={<AllUsersPage />} />
                <Route path="/create-new-user" element={<CreateNewUserPage />} />
                <Route path="/edit-news/:id" element={<EditNewsPage />} />
            </Route>
        </Routes>
    );
}
