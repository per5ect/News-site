import {SliderItem} from "./SliderItem.jsx";
import {SliderIndicator} from "./SliderIndicator.jsx";

export function MainHomeNewsSlider({sliderNews}) {
    return (
        <div className="carusel-style">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true">
                <SliderIndicator sliderCount={sliderNews.length}/>
                <div className="carousel-inner">
                    {sliderNews.map((slide, index) => (
                        <SliderItem key={slide.id} slideData={slide} isActive={index === 0}/>
                    ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}