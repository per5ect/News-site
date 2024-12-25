export function SliderIndicator({ sliderCount }) {
    return (
        <div className="carousel-indicators">
            {Array.from({ length: sliderCount }).map((_, index) => (
                <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                ></button>
            ))}
        </div>
    );
}
