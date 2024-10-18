import React from "react";
import "./Order.scss";

export default function Order({ cancelModal, item }) {
  return (
    <div className="Order">
      <div className="Order__content">
        <div>
          <img onClick={cancelModal} src="./images/Modal/x.svg" alt="cancel" />
        </div>
        <h2>Оформление заказа для {item.title}</h2>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="Product" value={item.title} />
          <input type="text" placeholder="Имя Фамилия" name="Name" required />
          <input
            type="number"
            placeholder="Телефон"
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
