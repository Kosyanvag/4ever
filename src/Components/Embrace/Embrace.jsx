import "./Embrace.scss";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";


export default function Embrace() {
  const targetDate = new Date("2024-12-12T11:00:00").getTime();
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <div className="Embrace">
      <div className="Embrace__content">
        <div className="Embrace__content-title">
          <h1>Հարսանյաց Հրավիրատոմս</h1>
        </div>
        <div className="Embrace__content-for">
          <img src="./images/Embrace/owner.png" alt="photo" />
        </div>
        <div className="Embrace__content-date">
          <p>Հարսանիքին մնաց</p>
          {timeLeft.days !== undefined ? (
            <div className="Embrace__content-date-time">
              <p>
                {timeLeft.days} <br />
                <span> Օր</span>
              </p>
              <p>
                {timeLeft.hours} <br />
                <span> Ժամ</span>
              </p>
              <p>
                {timeLeft.minutes} <br />
                <span> Րոպե</span>
              </p>
              <p>
                {timeLeft.seconds} <br />
                <span> Վայրկյան</span>
              </p>
            </div>
          ) : (
            <div>
              <p>O</p>
              <p>O</p>
              <p>O</p>
              <p>O</p>
            </div>
          )}
          <IoIosArrowDown />
        </div>
        <div className="Embrace__content-agenda">
          <div className="Embrace__content-agenda-box">
            <p>
              Սիրով սպասում ենք Ձեզ կիսելու մեզ հետ մեր կյանքի կարևոր և հիշարժան
              օրը
            </p>
            <h2>12|12|2024</h2>
            <img src="./images/Embrace/ring.svg" alt="photo" />
            <p>ՊՍԱԿԱԴՐՈՒԹՅԱՆ ԱՐԱՐՈՂՈՒԹՅՈՒՆ</p>
            <span>13:45</span>
            <span>Սուրբ Խաջ եկեղեցի</span>
            <h6>ք․Ախալքալաք, Ազատության 55</h6>
            <button>
              <a href="https://maps.app.goo.gl/w4JdAa1iCnmTjT3N6">
                Ինչպես հասնել
              </a>
            </button>
          </div>
          <div className="Embrace__content-agenda-boxTwo">
            <img src="./images/Embrace/champagne.svg" alt="photo" />
            <p>Հարսանյաց Հանդիսություն</p>
            <span>17:00</span>
            <span>«Իմպերատոր» ռեստորան</span>
            <h6>ք․Ախալքալաք, Աղմաշենեբելի 115</h6>
            <button>
              <a href="https://maps.app.goo.gl/dHxNENzZsUwpHAR76">
                Ինչպես հասնել
              </a>
            </button>
          </div>
          <div className="Embrace__content-agenda-boxThree">
            <img src="./images/Embrace/heart.svg" alt="photo" />
            <p>Սիրով սպասում ենք Ձեզ</p>
            <br />
            <p>Խնդրում ենք հաստատել Ձեր ներկայությունը միջոցառմանը</p>
            <span>Սպասում ենք ձեր պատասխանին մինչև 01.12.2024</span>
            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="90d4ff81-22a6-4ea2-8021-1173977264a8"
              />
              <div className="data">
                <select name="ՀյուրերիՔանակ" required>
                  <option value="Նշեք հյուրերի քանակը" selected disabled>
                    Նշեք հյուրերի քանակը
                  </option>
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
                  <option value="Չենք կարողանա գալ">Չենք կարողանա գալ</option>
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
    </div>
  );
}
