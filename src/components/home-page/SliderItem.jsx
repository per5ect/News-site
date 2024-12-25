export function SliderItem({ slideData, isActive }) {
    return (
        <div className={`carousel-item ${isActive ? "active" : ""}`}>
            <img src={slideData.image} className="d-block w-100 object-fit-cover" alt="..." height={"600vh"}/>
            <div className="p-3 carousel-caption d-md-flex align-items-center justify-content-center flex-column rounded-4">
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <h3 className="bg-dark p-1 rounded-3">
                        <a href={`/all-news/${slideData.id}`} className="text-white mb-2">{slideData.title}</a>
                    </h3>
                    <p className="text-white bg-dark p-1 rounded-3">{slideData.cardContent}</p>
                </div>
            </div>
        </div>
    );
}
