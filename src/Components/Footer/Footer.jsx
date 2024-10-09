import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__content">
        <div className="Footer__content-logo">
          <img src="./images/Logo/4everlogo.svg" alt="logo" />
          <div className="Footer__content-logo-contacts">
            <h2>Контакты</h2>
            <ul>
              <li>
                E-MAIL:
                <span>info.4ever.team@gmail.com</span>
              </li>
              <li>
                Телефон։
                <span>+995 599 99 99 99</span>
              </li>
            </ul>
          </div>
          <div className="Footer__content-logo-socials">
            <a href="https://www.instagram.com/4ever.ge/">
              <img src="./images/Logo/instagram.svg" alt="insagram" />
            </a>
            <a href="">
              <img src="./images/Logo/tg.svg" alt="telegram" />
            </a>
            <a href="">
              <img src="./images/Logo/wp.svg" alt="whatsapp" />
            </a>
          </div>
        </div>
        <div className="Footer__content-order">
          <h2>Вы уже выбрали дизайн вашего приглашения ?</h2>
          <form action="https://api.web3forms.com/submit" method="POST">
            <select name="Design" required>
              <option value="Serene">Serene</option>
              <option value="Bliss">Bliss</option>
              <option value="Eternal">Eternal</option>
              <option value="Pure">Pure</option>
              <option value="Euphoria">Euphoria</option>
              <option value="Выберите ваш дизайн" selected disabled>
                Выберите ваш дизайн
              </option>
            </select>
            <input
              type="tel"
              placeholder="Ваш номер телефона"
              name="PhoneNumber"
              required
            />
            <input type="text" placeholder="Имя Фамилия" name="Name" required />
            <input
              type="hidden"
              name="access_key"
              value="0338c2db-c5cc-457f-89c7-b95472fdc431"
            ></input>
            <button>Заказать</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
