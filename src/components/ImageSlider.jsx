import React from "react";
import Slider from "react-slick"
import plant1 from "../assets/plant-1.png"
import plant2 from "../assets/plant-2.png"
// import plant3 from "../assets/plant-3.png"

const ImageSlider = () => {
    const images = [plant1, plant2];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className=" mx-auto roundex-xl overflow-hidden shadow-sm h-full rounded-3xl w-full">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <img src={src} alt={`Slide ${index}`}  className="w-full h-[80vh] object-cover shadow-lg shadow-gray-400"/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;