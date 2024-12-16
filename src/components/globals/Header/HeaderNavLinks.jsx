export default function HeaderNavLinks() {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
                   aria-expanded="false">
                    Categories
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">About us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white" href="#">Contact us</a>
            </li>
        </ul>
    )
}