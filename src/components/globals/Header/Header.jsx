import {CircleUser} from "lucide-react";
import HeaderNavLinks from "./HeaderNavLinks.jsx";
import {SearchInputForm} from "./SearchInputForm.jsx";
import {Link} from "react-router-dom";

export function Header() {
    return (
        <header className="bg-dark">
            <div className="container">
            <nav className="navbar navbar-expand-lg h-85">
                <Link className="navbar-brand text-white"  to={"/"}>NEWS Site</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <HeaderNavLinks/>
                    <div className="d-flex ">
                        <SearchInputForm/>
                        <button className="btn btn-dark">
                            <CircleUser/>
                        </button>
                    </div>

                </div>
            </nav>
            </div>
        </header>
    )
}