import {SocialIcon} from "react-social-icons";
import "../../../styles/footer.scss"

export function Footer() {
    return (
        <footer className="footer bg-dark align-items-center">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-center align-items-center py-3">
                    <p className=" mb-0 text-white mb-3 mt-3">© 2022 NEWS Site, Inc</p>
                    <ul className="nav col-md-4 d-flex justify-content-end footer-links">
                        <li className="nav-item nav-soc"><SocialIcon href="#" url="www.x.comm"/></li>
                        <li className="nav-item nav-soc"><SocialIcon href="#" url="www.facebook.com"/></li>
                        <li className="nav-item nav-soc"><SocialIcon href="#" url="www.instagram.com"/></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}