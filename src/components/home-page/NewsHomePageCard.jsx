export function NewsHomePageCard({lastNews}) {
    console.log("data in card")
    console.log(lastNews)
    return (
        <div className="card shadow">
            <img src={lastNews.image} className="home-card-img card-img-top" alt="..." />
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="m-0">{lastNews.date}</p>
                    <p className="m-0">#{lastNews.categories}</p>
                </div>
                <h5 className="card-title">{lastNews.title}</h5>
                <p className="card-text">{lastNews.cardContent}</p>
                <a href={`/news/${lastNews.id}`} className="btn btn-primary">More</a>
            </div>
        </div>
    );
}
