import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/authSlice.js";
import { CircleUser, LogOut } from "lucide-react";
import {useNavigate} from "react-router-dom";

export function LoginProfileButton() {
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <div className="dropdown">
            {isAuthenticated ? (
                <>
                    <button className="btn btn-dark dropdown-toggle d-flex align-items-center justify-content-center"
                        type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={user.avatar} className="header-user-avatar me-2" alt=""/>
                        {user.name}
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        <li>
                            <a className="dropdown-item d-flex justify-content-center gap-2" href="/my-account"><CircleUser />
                                Account settings
                            </a>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                            <button onClick={handleLogout} className="dropdown-item d-flex gap-2 text-danger"><LogOut />    Log Out
                            </button>
                        </li>
                    </ul>
                </>
            ) : (
                <a href="/logIn" className="btn btn-outline-light">
                    Log In
                </a>
            )}
        </div>
    );
}
