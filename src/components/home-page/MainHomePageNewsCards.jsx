import '../../styles/home-page.scss'
import {NewsHomePageCard} from "./NewsHomePageCard.jsx";

export default function MainHomePageNewsCards({newsWithAuthors}) {
    console.log(newsWithAuthors)
    return (
        <div className="mt-5 d-flex flex-wrap justify-content-between card-container">
            {newsWithAuthors.map(newsWithAuthors => (
                <NewsHomePageCard key={newsWithAuthors.id} newsWithAuthors={newsWithAuthors} />
            ))}
        </div>
    )
}