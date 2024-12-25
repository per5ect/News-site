import {Trash2, Pencil, Medal, Cpu, Landmark} from "lucide-react"
import {useMainHome} from "../../hooks/useMainHome.js";

export function NewsHomeCard({lastNews}) {
    const { handleDelete, truncateText, user, isAuthenticated} =  useMainHome();

    return (
        <div className="card shadow">
            <a href={`/all-news/${lastNews.id}`}>
                <img src={lastNews.image} className="home-card-img card-img-top" alt="..."/>
            </a>
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="m-0">{lastNews.date}</p>
                    <div className="d-flex align-items-center gap-1">
                        {lastNews.categories === "Sport" ? <Medal/> :
                            lastNews.categories === "Technology" ? <Cpu/> :
                                lastNews.categories === "Politics" ? <Landmark/> : null}
                        <p className="m-0">{lastNews.categories}</p>
                    </div>
                </div>
                <h5><a href={`/all-news/${lastNews.id}`} className="card-title fw-bold">{lastNews.title}</a></h5>
                <p className="card-text">{truncateText(lastNews.cardContent, 90)}</p>
                <div className="d-flex column-gap-2">
                    {isAuthenticated && (user.role !== "reader") ?
                        <>
                            <a href={`/all-news/${lastNews.id}`} className="btn btn-primary w-100">More</a>
                            {user.role === "news-creator" ?
                                <a href={`/edit-news/${lastNews.id}`} className="btn btn-success"><Pencil/></a> : null}
                            <button className="btn btn-danger" onClick={() => handleDelete(lastNews.id)}>
                                <Trash2 />
                            </button>
                        </>
                        : null}
                </div>
            </div>
        </div>
    );
}
