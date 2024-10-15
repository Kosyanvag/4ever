import "./Nav.scss";
export default function Nav() {
  return (
    <nav className="Nav">
      <div className="Nav__content">
        <div className="Nav__content-logo">
          <img src="./images/Main/Nav/logo2.jpg" alt="photo" />
        </div>
        <div className="Nav__content-block">
          <ul>
            <li><a href="#about">Заказать</a></li>
            <li ><a href="#sliders">Новости</a></li>
            <li><a href="#products">Приглашения</a></li>
            <li><a href="#footer">О нас</a></li>
          </ul>
        </div>
        <div className="Nav__content-socials">
          <p>
            <a href="tel:+ 995 598 40 34 99">+ 995 598 40 34 99</a>
          </p>
        </div>
      </div>
    </nav>
  );
}
