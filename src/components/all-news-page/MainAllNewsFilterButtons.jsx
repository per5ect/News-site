export function MainAllNewsFilterButtons({setSortOrder, selectedCategory, setSelectedCategory}) {
    return (
        <div className="all-news-btns gap-3">
            <button type="button" onClick={() => setSelectedCategory("Sport")}
                    className={`btn btn-outline-dark ${selectedCategory === "Sport" ? "active" : ""}`}>
                Sport
            </button>
            <button type="button" onClick={() => setSelectedCategory("Technology")}
                    className={`btn btn-outline-dark ${selectedCategory === "Technology" ? "active" : ""}`}>
                Technology
            </button>
            <button type="button" onClick={() => setSelectedCategory("Politics")}
                    className={`btn btn-outline-dark ${selectedCategory === "Politics" ? "active" : ""}`}>
                Politics
            </button>
            <button type="button" className="btn btn-outline-dark" onClick={() => setSelectedCategory("")}>
                All
            </button>
            <div className="dropdown">
                <button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                    Sort by date
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <button className="dropdown-item" onClick={() => setSortOrder("new")}>
                            Newest
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item" onClick={() => setSortOrder("old")}>
                            Oldest
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}