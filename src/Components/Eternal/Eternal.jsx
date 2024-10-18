import "./Eternal.scss";

import { useEffect, useState } from "react";
export default function Eternal() {
  const targetDate = new Date("2024-12-18T11:00:00").getTime();
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
    <div className="Eternal">
      <div className="Eternal__content">
        <div className="Eternal__content-title">
          <h2>Ашот & Лилит</h2>
          <h1>
            А <span>|</span> Л
          </h1>
          <p>18 Декабря 2024</p>
        </div>
        <div className="Eternal__content-about">
          <h2>дорогие гости!</h2>
          <p>
            В нашей жизни предстоят счастливые перемены! <br /> Мы хотим, чтобы в этот
            день рядом с нами были самие близкие и дорогие для нас люди. <br /> Будем
            рады разделить с вами чудесный праздник. <br /> <br /> С любовью,
            Ашот и Лилит
          </p>
        </div>
        <div className="Eternal__content-clock">
          <h3>до свадбы осталось</h3>
          {timeLeft.days !== undefined ? (
            <div>
              <p>
                {timeLeft.days} <br /> дней
              </p>
              <p>
                {timeLeft.hours} <br /> часов
              </p>
              <p>
                {timeLeft.minutes} <br />
                минут
              </p>
              <p>
                {timeLeft.seconds} <br /> секунд
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
        <div className="Eternal__content-dayProgramm">
          <h2>Программа дня</h2>
          <div className="Eternal__content-dayProgramm-one">
            <h2>15:00</h2>
            <img src="./images/Eternal/wed.png" alt="wedding" />
            <div className="Eternal__content-dayProgramm-one-title">
              <h2>Венчание</h2>
              <p>
                Церковь Святой Анны <br /> г. Ереван, ул. Абовяна 15
              </p>
              <p>Вы станете свидителями новой семьи - нашей семьи</p>
            </div>
          </div>
          <div className="Eternal__content-dayProgramm-two">
            <h2>17:30</h2>
            <img src="./images/Eternal/placeholder.png" alt="placeholder" />
            <div className="Eternal__content-dayProgramm-two-title">
              <h2>Сбор гостей</h2>
              <p>Банкетный зал "Колизей" г. Ереван, ул. Пароняна 40</p>
              <p>Просим взять собой хорошее настроение и свои улыбки</p>
            </div>
          </div>
          <div className="Eternal__content-dayProgramm-three">
            <h2>18:00</h2>
            <img src="./images/Eternal/banquet.png" alt="eatbanwuet" />
            <div className="Eternal__content-dayProgramm-three-title">
              <h2>Начало банкета</h2>
              <p>Время вкусной еды, танцев и развлечений</p>
            </div>
          </div>
        </div>
        <div className="Eternal__content-location">
          <h2>Локация</h2>
          <p>Наш праздник пройдет в банкетном зале "Dvin".</p>
          <p>
            Он находится по адресу <br /> г. Ереван, ул. Пароняна 40
          </p>
          <img src="./images/Eternal/dvin.jpg" alt="dvin" />
          <h2>как добраться?</h2>
          <p>
            Мы подготовили для вас карту, чтобы вы точно добрались и порадовали
            нас своим присутствием.
          </p>

          <iframe
            src="https://yandex.com/map-widget/v1/?ll=44.502287%2C40.183837&mode=search&oid=104442593428&ol=biz&z=16.42"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </div>
        <div className="Eternal__content-contact">
          <h2>Пожалуйста, подтвердите своё присутствие на мероприятии</h2>
          <p>Ожидаем ваш ответ до 08.12.2024</p>
          <form action="https://api.web3forms.com/submit" method="POST">
            <select name="Кол-во гостей" required>
              <option value="Укажите кол-во гостей" selected disabled>
                Укажите кол-во гостей
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="Мы не сможем прийти">Мы не сможем прийти</option>
            </select>
            <input
              type="hidden"
              name="access_key"
              value="db261ca8-6f22-4a89-b93c-18f36a6ba980"
            ></input>
            <input
              type="text"
              placeholder="Имя Фамилия"
              name="Имя Фамилия"
              required
            />
            <input
              type="number"
              placeholder="Телефон"
              name="Телефон"
              required
            />
            <button>Отправить</button>
          </form>
          <h4>Мы будем счастливы видеть вас!</h4>
        </div>
      </div>
    </div>
  );
}
