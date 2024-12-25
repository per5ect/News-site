import {CircleUser, NotebookPen} from "lucide-react";

export function MainAllUsersFilterButtons({setFilter}){
    const handleFilterChange = (role) => {
        setFilter(role);
    };
    return (
        <div className="all-users-btns gap-3">
            <button className="btn btn-outline-dark" onClick={() => handleFilterChange("all")}>
                All Users
            </button>
            <button className="btn btn-outline-dark" onClick={() => handleFilterChange("news-creator")}>
                <NotebookPen/>
                News Creators
            </button>
            <button className="btn btn-outline-dark" onClick={() => handleFilterChange("reader")}>
                <CircleUser/>
                Readers
            </button>
        </div>
    )
}