import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewsById } from "../../services/NewsDetails-service.js";
import {SocialIcon} from "react-social-icons";

export function NewsDetailsMain() {
    const { id } = useParams();
    const [newsDetails, setNewsDetails] = useState(null);

    useEffect(() => {
        const fetchNewsData = async () => {
                const news = await getNewsById(id);
                console.log("data is loaded")
                setNewsDetails(news);
        };
        fetchNewsData();
    },[id]);

    return (
        <main className="mb-5 mt-4">
            {!newsDetails ? (<div>Loading...</div>) :
                <div className="">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item x"><a href="/" className="text-body-emphasis fw-bold">Home</a></li>
                            <li className="breadcrumb-item active text-black-50" aria-current="page">{newsDetails.title}</li>
                        </ol>
                    </nav>
                    <h1>{newsDetails.title}</h1>
                    <div className="d-flex flex-row align-items-center column-gap-4">
                            <p>Published: {newsDetails.date}</p>
                            <p>Category: {newsDetails.categories}</p>
                            <ul className="d-flex flex-row column-gap-4">
                                <li><SocialIcon href="#" url="www.x.comm"/></li>
                                <li><SocialIcon href="#" url="www.facebook.com"/></li>
                                <li><SocialIcon href="#"/></li>
                            </ul>
                        </div>
                    <img src={newsDetails.image} alt={newsDetails.title} width={1000} className="img-fluid"/>

                    <div className="w-100 mt-5 news-details-text-content">
                        <div className="w-75">
                            <h2 className="mb-3">{newsDetails.cardContent}</h2>
                            <p>{newsDetails.mainContent}</p>
                        </div>
                    </div>
                </div>}
        </main>
    )
}
