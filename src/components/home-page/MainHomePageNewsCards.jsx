import '../../styles/home-page.scss'
import {NewsHomePageCard} from "./NewsHomePageCard.jsx";

export default function MainHomePageNewsCards({lastNews}) {
    return (
        <div className="mt-5 d-flex flex-wrap justify-content-between card-container">
            {!lastNews ? <h1 className="text-center">Data not found</h1>:
                <>
                    {lastNews.map(newsCard => (
                        <NewsHomePageCard key={newsCard.id} lastNews={newsCard} />
                    ))}
                </>
            }
        </div>
    )
}