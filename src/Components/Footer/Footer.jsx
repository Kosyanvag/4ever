import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="Footer" id="footer">
      <div className="Footer__content">
        <div className="Footer__content-logo">
          <img src="./images/Logo/logo.jpg" alt="logo" />
        </div>
        <div className="Footer__content-logo-contacts">
        <ul>
            <li><a href="#about" >Заказать</a></li>
            <li><a href="#sliders" >Новости</a></li>
            <li><a href="#products" >Приглашения</a></li>
            <li><a href="#footer" >О нас</a></li>
          </ul>
        </div>
        <div className="Footer__content-logo-support">
          <h2>Обратная связь:</h2>
          <p>
            Ваше мнение важно для нас ! <br /> Если у вас возникли вопросы или
            предложения, свяжитесь с нами, и мы с радостью поможем. <br /> 4ever
            - всегда на связи для вашего удобства!
          </p>
        </div>
      </div>
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
      <h6>
        <a className="email" href="">
          4ever.ge
        </a>
      </h6>
    </footer>
  );
}
