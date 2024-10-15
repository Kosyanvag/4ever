import React from "react";
import "./Modal.scss";

export default function Modal({ cancelModal }) {
  return (
    <div className="Modal">
      <div className="Modal__content">
        <div>
          <img onClick={cancelModal} src="./images/Modal/x.svg" alt="cancel" />
        </div>
        <h2>Оформление заказа </h2>
        <form action="https://api.web3forms.com/submit" method="POST">
          <select name="Design" required>
            <option value="Выберите ваш дизайн" selected disabled required>
              Выберите ваш дизайн
            </option>
            <option value="Serene">Serene</option>
            <option value="Bliss">Bliss</option>
            <option value="Eternal">Eternal</option>
            <option value="Pure">Pure</option>
            <option value="Euphoria">Euphoria</option>
          </select>
          <input type="text" placeholder="Имя Фамилия" name="Name" required />
          <input type="tel" placeholder="Tелефон" name="PhoneNumber" required />

          <input
            type="hidden"
            name="access_key"
            value="0338c2db-c5cc-457f-89c7-b95472fdc431"
          ></input>
          <button>Заказать</button>
        </form>
        <div className="Modal__buttons"></div>
      </div>
    </div>
  );
}
