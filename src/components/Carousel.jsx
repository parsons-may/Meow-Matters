import { useState } from "react";
import "./Carousel.css";

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const angleClass = `rotate-${(currentIndex % 8 + 8) % 8}`;

    return (
        <>
        <div className="scene">
            <div className={`carousel ${angleClass}`}>
                <div className="carousel-cell">
                    <img src="/images/Lily.jpeg" alt="Lily the cat smiling at the camera" />
                </div>
                <div className="carousel-cell">
                    <img src="/images/Max.jpeg" alt="Max the cat looking at the camera" />
                </div>
                <div className="carousel-cell">
                    <img src="/images/Coco.jpeg" alt="Coco the cat sleeping" />
                </div>
                <div className="carousel-cell">
                    <img src="/images/MaxAndRuby.jpeg" alt="Max and Ruby snuggling" />
                </div>
                <div className="carousel-cell">
                    <img src="/images/CatPlaying.jpeg" alt="Cat Playing" />
                </div>
                <div className="carousel-cell">
                    <img src="/images/FluffyCat.jpeg" alt="Fluffy Cat" />
                </div>
                <div className="carousel-cell">
                    <img src="/images/SittingCat.jpeg" alt="Cat Sitting" />
                </div>
                <div className="carousel-cell">
                    <img src="/images/YawningCat.jpeg" alt="Cat Yawning" />
                </div>
            </div>
        </div>

        <div className="carousel-btns">
            <button className="button" onClick={() => setCurrentIndex(i => i - 1)}>Prev</button>
            <button className="button" onClick={() => setCurrentIndex(i => i + 1)}>Next</button>
        </div>
        </>
    );
}

export default Carousel;