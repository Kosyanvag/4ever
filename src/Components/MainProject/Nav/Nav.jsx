import "./Nav.scss";
export default function Nav() {
  return (
    <nav className="Nav">
      <div className="Nav__content">
        <img src="./images/Main/Nav/logo.svg" alt="photo" />
        <div className="Nav__content-socials">
          <span>
            <img src="./images/Main/Nav/instagram.svg" alt="photo" />
          </span>
          <span>
            <img src="./images/Main/Nav/tg.svg" alt="photo" />
          </span>
          <span>
            <img src="./images/Main/Nav/wp.svg" alt="photo" />
          </span>
          <p>+995 555 55 55 55</p>
        </div>
      </div>
    </nav>
  );
}
