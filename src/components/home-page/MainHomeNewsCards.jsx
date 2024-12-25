import {NewsHomeCard} from "./NewsHomeCard.jsx";

export default function MainHomeNewsCards({lastNews}) {
    return (
        <div className="mt-5 d-flex flex-wrap justify-content-center card-container">
            {!lastNews ? <h1 className="text-center">Data not found</h1>:
                <>
                    {lastNews.map(newsCard => (
                        <NewsHomeCard key={newsCard.id} lastNews={newsCard} />
                    ))}
                </>
            }
        </div>
    )
}