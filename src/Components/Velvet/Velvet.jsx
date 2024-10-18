import "./Velvet.scss";
import { useEffect } from "react";

export default function Velvet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Velvet">
      <div className="Velvet__content">
        <div className="Velvet__content-title">
          <video
            src="./images/Velvet/couple.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <div className="Velvet__content-title-text">
            <h1>
              Լեո <br />և<br />
              Գոհար
            </h1>
          </div>
        </div>
        <div className="Velvet__content-date">
          <h2>ՍԻՐԵԼԻ ՀՅՈՒՐԵՐ</h2>
          <p>
            Ուրախ ենք հրավիրել Ձեզ մեր առաջին ընտանեկան տոնակատարությանը՝ Մեր
            հարսանիքին։Մենք ցանկանում ենք, որ այդ օրը մեր կողքին լինեն
            ամենամտերիմ մարդիկ։
          </p>
          <div className="Velvet__content-date-image">
            <img src="./images/Velvet/calendare.svg" alt="photo" />
            <span>
              <img src="./images/Velvet/ring2.png" alt="photo" />
            </span>
          </div>
        </div>
        <div className="Velvet__content-photos">
          <img src="./images/Velvet/1.jpg" alt="" />
          <span>
            <img src="./images/Velvet/2.jpg" alt="" />
          </span>
          <h2>23.08.2024</h2>
        </div>
        <div className="Velvet__content-timing">
          <h2>TIMING</h2>
          <div className="Velvet__content-timing-boxes">
            <div className="Velvet__content-timing-boxes-box">
              <div className="Velvet__content-timing-boxes-box-item">
                <img src="./images/Velvet/ring.png" alt="" />
                <span>15:00</span>
                <p>Պսակադրության Արարողություն</p>
              </div>
              <div className="Velvet__content-timing-boxes-box-item">
                <img src="./images/Velvet/cake.png" alt="" />
                <span>22:00</span>
                <p>Տորթի կտրման արարողություն</p>
              </div>
            </div>
            <hr />
            <div className="Velvet__content-timing-boxes-box2">
              <div className="Velvet__content-timing-boxes-box2-item">
                <img src="./images/Velvet/location.png" alt="" />
                <span>17:00</span>
                <p>Դիմավորում ռեստորանում</p>
              </div>
              <div className="Velvet__content-timing-boxes-box2-item">
                <img src="./images/Velvet/end.svg" alt="" />
                <span>24:00</span>
                <p>Ավարտ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Velvet__content-location">
          <h2>LOCATIONS</h2>
          <div className="Velvet__content-location-box">
            <div className="Velvet__content-location-box-left">
              <img src="./images/Velvet/location.png" alt="" />
              <p>Պսակադրությունը կանցկացվի Սուրբ Խաչ Եկեղեցում</p>
              <span>
                <img src="./images/Velvet/church.svg" alt="" />
              </span>
            </div>
            <div className="Velvet__content-location-box-right">
              <img src="./images/Velvet/champagne.svg" alt="" />
              <p>Տոնական խնջույքը կանցկացվի Kolizey ռեստորանում</p>
              <span>
                <img src="./images/Velvet/resturant.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="Velvet__content-invite">
          <h2>Հյուրերի հարցաթերթիկ</h2>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="a36cd1fd-35a3-4d54-ad0e-3d86cd1cd265"
            />
            <div className="data">
              <select name="ՀյուրերիՔանակ" required>
                <option value="Չենք կարողանա գալ">Չենք կարողանա գալ</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="Նշեք հյուրերի քանակը" selected disabled>
                  Նշեք հյուրերի քանակը
                </option>
              </select>
              <input
                type="text"
                name="Անուն Ազգանուն"
                placeholder="Անուն Ազգանուն"
              />
              <input
                type="number"
                name="Հեռախոսահամար"
                placeholder="Ձեր Հեռախոսահամարը"
                required
              />
            </div>
            <button>Ուղղարկել</button>
          </form>
        </div>
      </div>
    </div>
  );
}
