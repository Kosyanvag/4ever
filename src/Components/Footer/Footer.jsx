import "./Footer.scss";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="Footer" id="footer">
      <div className="Footer__content">
        <div className="Footer__content-logo">
          <img src="./images/Logo/logo.jpg" alt="logo" />
        </div>
        <div className="Footer__content-logo-contacts">
          <ul>
            <li>
              <a href="#about">{t("footer.order")}</a>
            </li>
            <li>
              <a href="#sliders">{t("footer.news")}</a>
            </li>
            <li>
              <a href="#products">{t("footer.invite")}</a>
            </li>
            <li>
              <a href="#footer">{t("footer.about")}</a>
            </li>
          </ul>
        </div>
        <div className="Footer__content-logo-support">
          <h2>{t("footer.footerSuport")}</h2>
          <p>{t("footer.footerText")}</p>
          <p>{t("footer.footerTextTwo")}</p>
          <p>{t("footer.footerTextThree")}</p>
        </div>
      </div>
      <div className="Footer__content-logo-socials">
        <a href="https://www.instagram.com/4ever.ge/">
          <img src="./images/Logo/instagram.svg" alt="insagram" />
        </a>
        <a href="https://t.me/foureverge">
          <img src="./images/Logo/telegram.svg" alt="telegram" />
        </a>
        <a href="wa.me/995551555322">
          <img src="./images/Logo/wp.svg" alt="whatsapp" />
        </a>
      </div>
      <h6>
        <a className="email">
          <img src="./images/Logo/copyrights.png" alt="" />
          {t("footer.footerCopy")}
        </a>
      </h6>
    </footer>
  );
}
