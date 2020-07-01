import React from 'react';
import Slider from "react-slick";
import "../css/shoeSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const photos = [
    {
        name: "Photo 1",
        url: "/imgs/cactusVapor.jpeg",
        alt: "Nike Cactus Vapor"
    },
    {
        name: "Photo 2",
        url: "/imgs/clotAir.jpeg",
        alt: "Nike Air Clot"
    },
    {
        name: "Photo 3",
        url: "/imgs/travisScottAir.jpeg",
        alt: "Nike Air Travis Scott"
    },
    {
        name: "Photo 4",
        url: "/imgs/nikeAirOff.jpeg",
        alt: "Nike Air Off white"
    }
    
]
class ShoeCarousel extends React.Component {
    render() {
        const settings = {
            autoplay: true,
            dots: false,
            infinite: true,
            speed: 200,
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1,
            className: "slides"
           }
    return (
        <div className="carousel-slide">
        <Slider {...settings}>
            {photos.map((photo) => {
                return(
                    <div>
                        <img width="100%" src={photo.url}/>
                    </div>
                )
            })}
            

        </Slider>
        </div>
          )
        }
}
export default ShoeCarousel;