import { useEffect } from "react";
import {SocialIcon} from "react-social-icons";
import {useNewsDetail} from "../../hooks/useNewsDetail.js";

export function NewsDetailsMain() {
    const {newsDetails, fetchNewsData, id } = useNewsDetail()

    useEffect(() => {
        fetchNewsData();
    },[id]);

    return (
        <main className="mb-5 mt-4">
            {!newsDetails ? (<div>Loading...</div>) :
                <div className="">
                    <nav aria-label="breadcrumb bred-links">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item x">
                                <a href="/" className="text-body-emphasis fw-bold">Home</a></li>
                            <li className="breadcrumb-item active text-black-50"
                                aria-current="page">{newsDetails.title}</li>
                        </ol>
                    </nav>
                    <div className="d-flex flex-column align-items-center column-gap-4">
                        <h1 className="mb-3 mt-4 fw-bold">{newsDetails.title}</h1>
                        <div className="d-flex flex-row align-items-center column-gap-4 mb-4 bg-body-secondary rounded-3 p-3">
                            <div>
                                <p className="mb-1">Published: {newsDetails.date}</p>
                                <p className="mb-0">Category: {newsDetails.categories}</p>
                            </div>
                            <ul className="d-flex flex-row social-links ps-0 mb-0">
                                <li><SocialIcon href="#" url="www.x.comm" className="socials-icons"/></li>
                                <li><SocialIcon href="#" url="www.facebook.com" className="socials-icons"/></li>
                                <li><SocialIcon href="#" className="socials-icons"/></li>
                            </ul>
                        </div>

                        <img src={newsDetails.image} alt={newsDetails.title} width={1000} className="img-news-details"/>
                        <div className="w-75 mt-3">
                            <h2 className="mb-4 fw-bold">{newsDetails.cardContent}</h2>
                            <p>{newsDetails.mainContent}</p>
                        </div>
                    </div>
                </div>}
        </main>
    )
}
