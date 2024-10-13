import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__content">
        <div className="Footer__content-logo">
          <img src="./images/Logo/logo.jpg" alt="logo" />
          
          <div className="Footer__content-logo-socials">
            <a href="https://www.instagram.com/4ever.ge/">
              <img src="./images/Logo/instagram.svg" alt="insagram" />
            </a>
            <a href="">
              <img src="./images/Logo/telegram.svg" alt="telegram" />
            </a>
            <a href="">
              <img src="./images/Logo/wp.svg" alt="whatsapp" />
            </a>
          </div>
        </div>
        <div className="Footer__content-logo-contacts">
          <h2>О нас</h2>
          <h2>О нас</h2>
          <h2>О нас</h2>
           
          </div>
        <div className="Footer__content-order">
          <h2>Вы уже выбрали дизайн вашего приглашения ?</h2>
          <form action="https://api.web3forms.com/submit" method="POST">
            <select name="Design" required>
              <option value="Выберите ваш дизайн" selected disabled>
                Выберите ваш дизайн
              </option>
              <option value="Serene">Serene</option>
              <option value="Bliss">Bliss</option>
              <option value="Eternal">Eternal</option>
              <option value="Pure">Pure</option>
              <option value="Euphoria">Euphoria</option>
            </select>
            <input type="text" placeholder="Имя Фамилия" name="Name" required />
            <input
              type="tel"
              placeholder="Tелефон"
              name="PhoneNumber"
              required
            />

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
