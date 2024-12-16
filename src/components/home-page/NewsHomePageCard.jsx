export function NewsHomePageCard({newsWithAuthors}) {
    return (
        <div className="card">
            <img src={newsWithAuthors.image} className="home-card-img card-img-top" alt="..." />
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="m-0">{newsWithAuthors.date}</p>
                    <p className="m-0">#{newsWithAuthors.categories}</p>
                </div>
                <h5 className="card-title">{newsWithAuthors.title}</h5>
                <p className="card-text">{newsWithAuthors.content}</p>
                <a href={`/news/${newsWithAuthors.id}`} className="btn btn-primary">More</a>
            </div>
        </div>
    );
}
