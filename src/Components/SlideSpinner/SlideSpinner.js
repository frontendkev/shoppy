
import './slidespinner.css';
import {useCallback, useEffect, useState} from "react";
export const SlideSpinner = props => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const startSlide = useCallback(() => {
        setCurrentSlide(s => s + 1);
        if (currentSlide >= props.slides.length) {
            return setCurrentSlide(c => 1);
        }
    }, [currentSlide]);

    useEffect(() => {
        let slideInterval;
        slideInterval = setInterval(startSlide, 5000);
        return () => {
            clearInterval(slideInterval);
        }
    }, [currentSlide]);
    return (
        <div className={`relative bg-white w-[1em] h-[0.3em] rounded-sm ${currentSlide === props.slideId ? 'spinner' : 'default'} overflow-hidden`}>

        </div>
    )
}