import { useEffect, useState } from "react";
import "./Harmony.scss";

export default function Harmony() {
  const targetDate = new Date("2025-01-09T11:00:00").getTime();
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
    window.scrollTo(0, 0);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <div className="Harmony">
      <div className="Harmony__content">
        <div className="Harmony__content-title">
          <h1>Կարեն & Սոնա</h1>
          <h3>Հարսանիքին մնացել է</h3>
          <div>
            {timeLeft.days !== undefined ? (
              <div>
                <p>
                  {timeLeft.days} <br /> Օր
                </p>
                <p>
                  {timeLeft.hours} <br /> Ժամ
                </p>
                <p>
                  {timeLeft.minutes} <br />
                  Րոպե
                </p>
                <p>
                  {timeLeft.seconds} <br /> Վայրկյան
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
          </div>
        </div>
        <div className="Harmony__content-about">
          <p>
            Սիրով հրավիրում ենք Ձեզ կիսելու մեզ հետ մեր կյանքի կառևոր և հիշարժան
            օրը <br /> <br /> Սպասում ենք Ձեզ մեր հարսանիքին{" "}
          </p>
          <h2>24 Դեկտեմբեր 2024</h2>
        </div>
        <div className="Harmony__content-timing">
          <h3>Ծրագիր</h3>
          <div className="Harmony__content-timing-start">
            <div>
              <img src="./images/Harmony/hall.png" alt="hall" />
              <h2>14:20</h2>
              <h2>Պսակադրություն</h2>
              <p>Սուրբ Սարգիս եկեղեցի</p>
              <button>Ինչպես հասնել</button>
            </div>
          </div>
          <div className="Harmony__content-timing-end">
            <div>
              <img src="./images/Harmony/banquet.png" alt="banquet" />
              <h2>17:00</h2>
              <h2>Հարսանյաց հանդիսություն</h2>
              <p>"Մորենա" ռեստորանային համալիր</p>
              <button>Ինչպես հասնել</button>
            </div>
          </div>
        </div>
        <div className="Harmony__content-photo">
          <img src="./images/Harmony/1.jpg" alt="" />
          <img src="./images/Harmony/2.jpg" alt="" />
          <img src="./images/Harmony/3.jpg" alt="" />
        </div>
        <div className="Harmony__content-contact">
          <h2>Խնդրում ենք հաստատել Ձեր ներկայությունը միջոցառմանը</h2>
          <p>Կսպասենք պատասխանի մինչև 14.12.2024</p>

          <form action="https://api.web3forms.com/submit" method="POST">
          <select name="Հյուրերի քանակ" required>
              <option value="Հյուրերի քանակ" selected disabled>
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
              <option value="Չենք կարողանա գալ">Չեմ կարողանա գալ</option>
            </select>
            <input
              type="hidden"
              name="access_key"
              value="a36cd1fd-35a3-4d54-ad0e-3d86cd1cd265"
            ></input>
            <input
              type="text"
              placeholder="Անուն Ազգանուն"
              name="Անուն Ազգանուն"
              required
            />
            <input
              type="number"
              placeholder="Հեռախոսահամար"
              name="Հեռախոսահամար"
              required
            />
            
            <button>Ուղարկել</button>
          </form>

          <h2>Սիրով սպասում ենք Ձեզ</h2>
        </div>
      </div>
    </div>
  );
}
