import React, { useState } from "react";
import "./Sliders.scss";
import Slider from "react-slick/lib/slider";

const source = [
  {
    id: 1,
    img: "./images/Slider/canva.jpg",
  },
  {
    id: 2,
    img: "./images/Slider/banner1.jpg",
  },
  {
    id: 3,
    img: "./images/Slider/canva3.jpg",
  },
];

export default function Sliders() {
  const [data, setData] = useState(source);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="Sliders">
      <div className="Sliders__content">
        <Slider {...settings}>
          {data.map((elem) => {
            return (
              <div key={elem.id}>
                <img src={elem.img} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
