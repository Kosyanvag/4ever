// import React from "react";
// import "./Order.scss";

// export default function Order({ onOrderClick }) {
//   return (
//     <div className="Order">
//       <div className="Order__content">
//         <h2>Оформление заказа </h2>
//         <form action="https://api.web3forms.com/submit" method="POST">
//           <select name="Design" required>
//             <option value="Выберите ваш дизайн" selected disabled>
//               Выберите ваш дизайн
//             </option>
//             <option value="Serene">Serene</option>
//             <option value="Bliss">Bliss</option>
//             <option value="Eternal">Eternal</option>
//             <option value="Pure">Pure</option>
//             <option value="Euphoria">Euphoria</option>
//           </select>
//           <input type="text" placeholder="Имя Фамилия" name="Name" required />
//           <input type="tel" placeholder="Телефон" name="PhoneNumber" required />
//           <button
//             type="button"
//             onClick={() => onOrderClick("Serene")}
//           >
//             Заказать
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


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
          <input type="number" placeholder="Телефон" name="PhoneNumber" required />
          <input
            type="hidden"
            name="access_key"
            value="0338c2db-c5cc-457f-89c7-b95472fdc431"
          ></input>
          <button type="submit">Заказать</button>
        </form>
      </div>
    </div>
  );
}
