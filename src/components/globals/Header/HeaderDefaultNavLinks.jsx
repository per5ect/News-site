import {useSelector} from "react-redux";

export default function HeaderDefaultNavLinks() {

    const { user, isAuthenticated } = useSelector((state) => state.auth);

    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a href="/all-news" className="nav-link active text-white">All News</a></li>
                <li className="nav-item">
                    {!isAuthenticated || user.role === "reader" ?
                        (<a className="nav-link active text-white" aria-current="page" href="#">About us</a>) :
                        user.role === "news-creator" ?
                            (<a className="nav-link active text-white" aria-current="page" href="/create-news">Create
                                News</a>) :
                            (<a className="nav-link active text-white" aria-current="page" href="/all-users">All
                                Users</a>)}
                </li>
                <li className="nav-item">
                    {!isAuthenticated || user.role === "reader" ?
                        (<a className="nav-link active text-white" aria-current="page" href="#">Contact us</a>) :
                        user.role === "news-creator" ?
                            (<a className="nav-link active text-white" aria-current="page" href="/all-news">Edit
                                News</a>) :
                            (<a className="nav-link active text-white" aria-current="page" href="/create-new-user">Create
                                New Writer</a>)
                    }
                </li>
        </ul>
)
}