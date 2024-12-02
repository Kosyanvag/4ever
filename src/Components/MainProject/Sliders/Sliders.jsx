import { useState } from "react";
import "./Sliders.scss";
import Slider from "react-slick/lib/slider";

const source = [
  
  {
    id: 1,
    img: "./images/Sliders/day.png",
  },
  {
    id: 2,
    img: "./images/Sliders/winter.png",
  },
  {
    id: 3,
    img: "./images/Sliders/price.png",
  },
  {
    id: 4,
    img: "./images/Sliders/ecology.png",
  },
  {
    id: 5,
    img: "./images/Sliders/insta.png",
  },
];

export default function Sliders() {
  const [data, setData] = useState(source);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="Sliders" id="sliders">
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
