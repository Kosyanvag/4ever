import { useState, useEffect, useRef } from "react";
import "./Nav.scss";
import { RxHamburgerMenu } from "react-icons/rx";

import { useTranslation } from "react-i18next";
export default function Nav() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Меняем язык
    localStorage.setItem("i18nextLng", lang); // Сохраняем язык в localStorage
  };
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "sliders", "products", "footer"];
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = window.pageYOffset + rect.top;

          if (
            scrollPos >= offsetTop &&
            scrollPos <= offsetTop + element.offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className={isMenuOpen ? "blur" : ""}>
        {!isMenuOpen && (
          <nav className="Nav">
            <div className="Nav__content">
              <div className="Nav__content-logo">
                <a href="#about">
                  <img src="./images/Main/Nav/logo2.jpg" alt="logo" />
                </a>
                <RxHamburgerMenu onClick={handleMenuToggle} />
              </div>
              <div className="Nav__content-block">
                <ul>
                  <li>
                    <a
                      href="#about"
                      className={activeSection === "about" ? "active" : ""}
                    >
                      {t("nav.order")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sliders"
                      className={activeSection === "sliders" ? "active" : ""}
                    >
                      {t("nav.news")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#products"
                      className={activeSection === "products" ? "active" : ""}
                    >
                      {t("nav.invite")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#footer"
                      className={activeSection === "footer" ? "active" : ""}
                    >
                      {t("nav.about")}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="Nav__content-socials">
                <p>
                  <a href="tel:+995551555322">+ 995 551 555 322</a>
                </p>
              </div>
              <div className="Nav__content-language">
                <img src="./images/Logo/language.png" alt="language" />
                <select
                  value={i18n.language} // Привязываем значение селектора к текущему языку
                  onChange={(e) => changeLanguage(e.target.value)} // Обработчик выбора языка
                >
                  <option value="ru">RU</option>
                  <option value="am">AM</option>
                </select>
              </div>
            </div>
          </nav>
        )}
        {isMenuOpen && (
          <div
            className={`burgerMenu ${isMenuOpen ? "open" : ""}`}
            ref={menuRef}
          >
            <div className="burgerMenu__content">
              <div className="burgerMenu__content-language">
                <img src="./images/Logo/language.png" alt="language" />
                <select
                  value={i18n.language} // Привязываем значение селектора к текущему языку
                  onChange={(e) => changeLanguage(e.target.value)} // Обработчик выбора языка
                >
                  <option value="ru">RU</option>
                  <option value="am">AM</option>
                </select>
              </div>

              <button>
                <a href="tel:+995551555322">+ 995 551 555 322</a>
              </button>
              <div className="burgerMenu__content-header">
                <img src="./images/Main/Nav/logo2.jpg" alt="logo" />
              </div>
              <div className="burgerMenu__content-links">
                <ul onClick={() => setIsMenuOpen(false)}>
                  <li>
                    <a
                      href="#about"
                      onClick={() => setIsMenuOpen(false)}
                      className={activeSection === "about" ? "active" : ""}
                    >
                      {t("nav.order")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sliders"
                      onClick={() => setIsMenuOpen(false)}
                      className={activeSection === "sliders" ? "active" : ""}
                    >
                      {t("nav.news")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#products"
                      onClick={() => setIsMenuOpen(false)}
                      className={activeSection === "products" ? "active" : ""}
                    >
                      {t("nav.invite")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#footer"
                      onClick={() => setIsMenuOpen(false)}
                      className={activeSection === "footer" ? "active" : ""}
                    >
                      {t("nav.about")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
