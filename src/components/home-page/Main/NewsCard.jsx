export function NewsCard({newsWithAuthors}) {
    console.log(newsWithAuthors);
    return (
        <div className="card">
            <img src="https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg"
                 className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{newsWithAuthors.title}</h5>
                <p className="card-text">{newsWithAuthors.content}</p>
                <div className="bg-body-tertiary rounded-3 d-flex justify-content-between align-items-center p-2">
                    <img src={newsWithAuthors.author.avatar} width={50} height={50} className="rounded-3" alt=""/>
                    <div>
                        <p className="p-0">{newsWithAuthors.author.name}</p>
                        <p>{newsWithAuthors.date}</p>
                    </div>

                    <button className="btn btn-primary">More</button>
                </div>
            </div>
        </div>
    )
}