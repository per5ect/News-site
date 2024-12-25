import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export function HeaderNavbarBrand(){
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    const getModeType = () => {
        if(user.role === "news-creator"){
            return "Writer Mode"
        } else if(user.role === "admin"){
            return "Admin Mode"
        } else return `Hello ${user.name}`
    };
    return (
        <Link className="navbar-brand text-white fw-bold"  to={"/"}>News Site
            {isAuthenticated ?
                <span className="bg-body-secondary text-black p-1 pe-1 rounded-3 ms-2 fw-light mode-style">
                    {getModeType()}
                </span> : null}
        </Link>
    )
}