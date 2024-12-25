import HeaderDefaultNavLinks from "./HeaderDefaultNavLinks.jsx";
import {SearchInputForm} from "./SearchInputForm.jsx";
import {HeaderNavbarBrand} from "./HeaderNavbarBrand.jsx";
import {LoginProfileButton} from "./LoginProfileButton.jsx";
import "../../../styles/header.scss"

export function Header() {
    return (
        <header className="bg-dark">
            <div className="container">
            <nav className="navbar navbar-expand-lg h-85">
                <HeaderNavbarBrand/>
                <button className="navbar-toggler bg-body" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <HeaderDefaultNavLinks/>
                    <div className="d-flex column-gap-4">
                        <SearchInputForm/>
                        <LoginProfileButton/>
                    </div>
                </div>
            </nav>
            </div>
        </header>)
}