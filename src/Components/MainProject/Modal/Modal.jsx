import "./Modal.scss";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function Modal({ cancelModal }) {
  const { t } = useTranslation();
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("Modal")) {
      cancelModal();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        cancelModal();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [cancelModal]);

  return (
    <div className="Modal" onClick={handleClickOutside}>
      <div className="Modal__content">
        <div>
          <img onClick={cancelModal} src="./images/Modal/x.svg" alt="cancel" />
        </div>
        <h2>{t("modal.title")}</h2>
        <form action="https://api.web3forms.com/submit" method="POST">
          <select name="Design" required>
            <option value="" selected disabled hidden>
              {t("modal.design")}
            </option>
            <option value="Serene">Serene</option>
            <option value="Bliss">Bliss</option>
            <option value="Eternal">Eternal</option>
            <option value="Pure">Pure</option>
            <option value="Embrace">Embrace</option>
            <option value="Velvet">Velvet</option>
            <option value="Harmony">Harmony</option>
            <option value="Radiance">Radiance</option>
            <option value="Siluette">Siluette</option>
            <option value="Spark">Spark</option>
            <option value="Eclipse">Eclipse</option>
          </select>
          <input
            type="text"
            placeholder={t("modal.name")}
            name="Name"
            required
          />
          <input
            type="tel"
            placeholder={t("modal.phone")}
            name="PhoneNumber"
            required
          />
          <input
            type="hidden"
            name="access_key"
            value="a36cd1fd-35a3-4d54-ad0e-3d86cd1cd265"
          ></input>
          <button type="submit">Заказать</button>
        </form>
      </div>
    </div>
  );
}
