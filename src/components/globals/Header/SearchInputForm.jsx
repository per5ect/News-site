import {Search} from "lucide-react";

export function SearchInputForm() {
    return (
        <form className="d-flex " role="search">
            <input className="form-control rounded-end-0" type="search" placeholder="Search"
                   aria-label="Search"/>
            <button className="btn btn-light rounded-start-0" type="submit"><Search /></button>
        </form>
    )
}