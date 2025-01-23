import "./GarikZina.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
export default function GarikZina() {
  const { t, i18n } = useTranslation();
  const targetDate = new Date("2025-03-14T18:00:00").getTime();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Меняем язык
    localStorage.setItem("i18nextLng", lang); // Сохраняем язык в localStorage
  };
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
  const scrollToPosition = () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  };
  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="Bliss">
      <div className="Bliss__content">
        <div className="Bliss__content-title">
          <select
            value={i18n.language} // Привязываем значение селектора к текущему языку
            onChange={(e) => changeLanguage(e.target.value)} // Обработчик выбора языка
          >
            <option value="ru">RU</option>
            <option value="am">AM</option>
          </select>
          <h1>
            Garik & <br /> Zina
          </h1>
          <p>{t("garikZina.invite")}</p>
          <img
            src="./images/Bliss/down-arrow.svg"
            alt="down"
            onClick={() => {
              document
                .querySelector(".Bliss__content-about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
        <div className="Bliss__content-about">
          <h2>{t("garikZina.about")}</h2>
          <p>
            {t("garikZina.about2")}
            <br />
            <br />
            {t("garikZina.about3")}
          </p>
          <div id="clock">
            <h2>{t("garikZina.date")}</h2>
            {timeLeft.days !== undefined ? (
              <div>
                <p>
                  {timeLeft.days} <br /> {t("garikZina.dateInfo2")}
                </p>
                <p>
                  {timeLeft.hours} <br /> {t("garikZina.dateInfo3")}
                </p>
                <p>
                  {timeLeft.minutes} <br />
                  {t("garikZina.dateInfo4")}
                </p>
                <p>
                  {timeLeft.seconds} <br /> {t("garikZina.dateInfo5")}
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
        <div className="Bliss__content-day">
          <img src="./images/Serene/wedding-ring (1).svg" alt="infinity" />
          <h2>
            15:00 <br /> <br /> {t("garikZina.church")} <br />
          </h2>
          <p>
            {t("garikZina.churchInfo")} <br /> {t("garikZina.dateInfo2")}
          </p>
          <button>
            <a
              href="https://yandex.ru/maps/org/35208500744?si=0ceqajwzc4bgnurmq9zvbaj0c4"
              target="_blank"
            >
              {t("garikZina.address")}
            </a>
          </button>

          <img src="./images/Serene/champagne-glasses (1).svg" alt="infinity" />
          <h2>
            17:30 <br /> <br /> {t("garikZina.resturant")} <br />
          </h2>
          <p>
            {t("garikZina.resturantInfo")} <br />
            {t("garikZina.resturantInfo2")}
          </p>

          <button>
            <a
              href="https://yandex.ru/maps/?ol=geo&text=%D0%BC%D0%B8%D0%BA%D1%80%D0%BE%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%20%D0%9D%D0%B0%D0%B7%D0%B0%D1%80%D0%B1%D0%B5%D0%BA%D1%8F%D0%BD,%2025/5&sll=44.462007,40.210027&sspn=0.006295,0.008210&si=0ceqajwzc4bgnurmq9zvbaj0c4"
              target="_blank"
            >
              {t("garikZina.address")}
            </a>
          </button>
          <br />
          <br />
          <p>{t("garikZina.info")}</p>
          <br />
        </div>
        <div className="Bliss__content-photo">
          <img src="./images/Bliss/love.svg" alt="love" />
          <h2>{t("garikZina.love")}</h2>
        </div>
      </div>
    </div>
  );
}
