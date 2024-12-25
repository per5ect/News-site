import { useParams } from "react-router-dom";
import { useEditNews } from "../../hooks/useEditNews.js";
import {MainEditNewsForm} from "./MainEditNewsForm.jsx";

export function MainEditNews() {
    const { id } = useParams();
    const { loading, error} = useEditNews(id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-danger">{error}</p>;

    return (
        <main className="mt-5 mb-5">
            <div className="container">
                <h1 className="mb-4">Edit News</h1>
                <MainEditNewsForm id={id}/>
            </div>
        </main>
    );
}
