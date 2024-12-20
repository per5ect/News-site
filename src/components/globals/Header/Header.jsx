import {CircleUser} from "lucide-react";
import HeaderNavLinks from "./HeaderNavLinks.jsx";
import {SearchInputForm} from "./SearchInputForm.jsx";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export function Header() {
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    const getBrandName = () => {
        if (!isAuthenticated) {
            return "NEWS Site";
        }

        return user.role === "news-creator"
            ? "NEWS Site News Writer mode"
            : "NEWS Site";
    };
    return (
        <header className="bg-dark">
            <div className="container">
            <nav className="navbar navbar-expand-lg h-85">
                <Link className="navbar-brand text-white"  to={"/"}>{getBrandName()}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <HeaderNavLinks/>
                    <div className="d-flex column-gap-4">
                        <SearchInputForm/>
                        {isAuthenticated ? (
                            <a href={"#"}
                               className="btn btn-outline-dark text-white d-flex align-items-center gap-2 border-0 bg-transparent">
                                <CircleUser/>
                                Log Out
                            </a>
                        ) : (<a href={"/logIn"}
                                className="btn btn-outline-dark text-white d-flex align-items-center gap-2 border-0 bg-transparent">
                            <CircleUser/>
                            log In
                        </a>)}

                    </div>
                </div>
            </nav>
            </div>
        </header>
    )
}