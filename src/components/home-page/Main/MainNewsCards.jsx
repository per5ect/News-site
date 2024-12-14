import '../../../styles/main-page.scss'
import {NewsCard} from "./NewsCard.jsx";

export default function MainNewsCards({newsWithAuthors}) {
    return (
        <div className="mt-5 d-flex flex-wrap justify-content-between card-container">
            {newsWithAuthors.map(newsItem => (
                <NewsCard key={newsItem.id} newsWithAuthors={newsItem} />
            ))}
        </div>
    )
}