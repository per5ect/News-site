import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewsById } from "../../services/NewsDetails-service.js";

export function NewsDetailsMain() {
    const { id } = useParams(); // Деструктуризация
    const [newsDetails, setNewsDetails] = useState(null);

    useEffect(() => {
        const fetchNewsData = async () => {
                const news = await getNewsById(id);
                console.log("data is loaded")
                setNewsDetails(news);
        };

        fetchNewsData();
    }, []);


    return (
        <main className="mb-5">
            {!newsDetails ? (<p>Loading...</p>) :
                <>
                    <h1>{newsDetails.title}</h1>
                    <img src={newsDetails.image} alt={newsDetails.title}/>
                </>
            }

        </main>
    )
}
