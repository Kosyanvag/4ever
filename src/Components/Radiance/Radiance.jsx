import { useEffect } from "react";
import "./Radiance.scss";

export default function Radiance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Radiance">
      <div className="Radiance__content">
        <div className="Radiance__content-title">
          <div className="Radiance__content-title-left">
            <h4>ՍԻՐԵԼԻ ՀՅՈՒՐԵՐ</h4>
            <p>
              Մենք ցանկանում ենք Ձեզ հետ կիսել մեր կյանքի կարևորագույն օրերից
              մեկը, որը տեղի կունենա
            </p>
            <h2>13/02</h2>
            <h3>2025</h3>
          </div>
          <div className="Radiance__content-title-center">
            <img src="./images/Radiance/wedding.jpg" alt="wedding" />
          </div>
          <div className="Radiance__content-title-right">
            <img src="./images/Radiance/wedding2.jpg" alt="wedding" />
          </div>
        </div>
        <div className="Radiance__content-day">
          <div className="Radiance__content-day-left">
            <img src="" alt="" />
          </div>
          <div className="Radiance__content-day-right">
            <h2></h2>
            <img src="" alt="" />
            <h3></h3>
            <hr />
            <p></p>
            <h2></h2>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}
