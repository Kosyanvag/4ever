import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Order.scss";

export default function Order({ cancelModal, item }) {
  const { t } = useTranslation();
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("Order")) {
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
    <div className="Order" onClick={handleClickOutside}>
      <div className="Order__content">
        <div>
          <img onClick={cancelModal} src="./images/Modal/x.svg" alt="cancel" />
        </div>
        <h2>
        {item.title} {t("order.title")} 
        </h2>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="Product" value={item.title} />
          <input
            type="text"
            placeholder={t("order.name")}
            name="Name"
            required
          />
          <input
            type="tel"
            placeholder={t("order.phone")}
            name="PhoneNumber"
            required
          />
          <input
            type="hidden"
            name="access_key"
            value="a36cd1fd-35a3-4d54-ad0e-3d86cd1cd265"
          ></input>
          <button type="submit">{t("order.order")}</button>
        </form>
      </div>
    </div>
  );
}
