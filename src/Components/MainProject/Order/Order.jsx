import React, { useEffect } from "react";
import "./Order.scss";

export default function Order({ cancelModal, item }) {

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
        <h2>Оформление заказа для {item.title}</h2>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="Product" value={item.title} />
          <input type="text" placeholder="Имя Фамилия" name="Name" required />
          <input type="tel" placeholder="Телефон" name="PhoneNumber" required />
          <input
            type="hidden"
            name="access_key"
            value="0338c2db-c5cc-457f-89c7-b95472fdc431"
          />
          <button type="submit">Заказать</button>
        </form>
      </div>
    </div>
  );
}

