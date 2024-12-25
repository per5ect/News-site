import {NewsHomeCard} from "../home-page/NewsHomeCard.jsx";

export function MainAllNewsCards ({allNews}) {
    return (
        <div className="mt-5 d-flex flex-wrap justify-content-center card-container">
            {!allNews ? <h1 className="text-center">Data not found</h1> :
                <>
                    {allNews.map(allNewsCard => (
                        <NewsHomeCard key={allNews.id} lastNews={allNewsCard}/>
                    ))}
                </>
            }
        </div>
    )
}