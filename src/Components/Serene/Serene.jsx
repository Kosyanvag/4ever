import { useEffect, useState } from "react";
import "./Serene.scss";

export default function Serene() {
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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <div className="Serene">
      <div className="Serene__content">
        <div className="Serene__content-title">
          <div className="Serene__content-title-left">
            <h2>ՀԱՐՍԱՆՅԱՑ ՀՐԱՎԵՐ</h2>
            <h1>A & M</h1>
            <h3>
              Armen & Mane <br /> Our forever begins today
            </h3>
          </div>
          <div className="Serene__content-title-right">
            <img src="./images/Serene/2.jpg" alt="photo" />
          </div>
        </div>
        <div className="Serene__content-clock">
          <h3>Մնաց</h3>
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
        <div className="Serene__content-about">
          <div className="Serene__content-about-left">
            <h2>ՍԻՌԵԼԻ ՀՅՈՒՐԵՐ</h2>
            <p>
              Մենք ցանկանում ենք Ձեզ հետ կիսել մեր կյանքի կարևորագույն օրերից
              մեկը։ Մեձ ուրախությամբ հրավիրում ենք Ձեզ մեր հարսանիքին։
            </p>
            <h2>09.01.2025</h2>
          </div>
          <div className="Serene__content-about-center">
            <img src="./images/Serene/1.jpg" alt="photo" />
          </div>
          <div className="Serene__content-about-right">
            <img src="./images/Serene/4.jpg" alt="photo" />
          </div>
        </div>
        <div className="Serene__content-day">
          <h2>Օրվա ծրագիրը</h2>
          <div className="Serene__content-day-block">
            <div className="Serene__content-day-block-left">
              <img src="./images/Serene/5.jpg" alt="photo" />
            </div>
            <div className="Serene__content-day-block-center">
              <img src="./images/Serene/3.jpg" alt="photo" />
            </div>
            <div className="Serene__content-day-block-right">
              <img src="./images/Serene/6.jpg" alt="photo" />
            </div>
          </div>
          <div>
            <img src="./images/Serene/wedding-ring (1).svg" alt="" />
            <h3>Պսակադրություն</h3>
            <h4>
              14:30 <br /> Սուռբ Գայանե եկեղեցի
            </h4>
            <p>ք․ Էջմիածին</p>
            <button>
              <a href="https://yandex.com/maps/-/CDThjD4g">ԻՆՉՊԵՍ ՀԱՍՆԵԼ</a>
            </button>
          </div>
          <div>
            <img src="./images/Serene/champagne-glasses (1).svg" alt="" />
            <h3>Հարսանյաց հանդիսություն</h3>
            <h4>
              18:00 <br /> "ՆՈՐ ԴՎԻՆ" <br /> Rhodes Music hall / <br /> by
              NorDvin
            </h4>
            <p>ք․ Էջմիածին, Աշտարակի խճուղի 1/1</p>

            <button>
              <a href="https://yandex.com/maps/-/CDThj2mj">ԻՆՉՊԵՍ ՀԱՍՆԵԼ</a>
            </button>
          </div>

          <div className="Serene__content-day-block">
            <div className="Serene__content-day-block-left">
              <img src="./images/Serene/9.jpg" alt="photo" />
            </div>
            <div className="Serene__content-day-block-center">
              <img src="./images/Serene/8.jpg" alt="photo" />
            </div>
            <div className="Serene__content-day-block-right">
              <img src="./images/Serene/7.jpg" alt="photo" />
            </div>
          </div>
        </div>
        <div className="Serene__content-contact">
          <h2>Խնդրում ենք հաստատել Ձեր ներկայությունը միջոցառմանը</h2>
          <p>Կսպասենք պատասխանի մինչև 01.01.2025</p>

          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="db261ca8-6f22-4a89-b93c-18f36a6ba980"
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
            <button>Ուղարկել</button>
          </form>

          <h2>Սիրով սպասում ենք Ձեզ</h2>
        </div>
      </div>
    </div>
  );
}
