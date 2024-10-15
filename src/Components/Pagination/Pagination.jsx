// import { useState } from "react";
// import "./Pagination.scss";
// import { Link } from "react-router-dom";
// import Order from "../MainProject/Order/Order";

// export default function Pagination({ total }) {

//   const [isOpen, setIsOpen] = useState(false);
//   const handleClick = () => {
//       setIsOpen(true)
//   }
//   const cancelModal = () => {
//     setIsOpen(false)
//   }






//   return (
//     <div className="Pagination">
//       {total.map((elem) => {
//         return (
//           <div className="Pagination__content" key={elem.id}>
//             <div key={elem.id}>
//               <Link to={`/${elem.title.toLowerCase()}`}>
//                 <img src={elem.img} alt="photo" />
//                 <h1>{elem.title}</h1>
//                 <p>{elem.desc}</p>
//               </Link>
//               <div>
//                 <button>{elem.price}</button>
//                 <button onClick={handleClick}>{elem.order}</button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       {isOpen ? (
//         <Order cancelModal={cancelModal} />
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }


import { useState } from "react";
import "./Pagination.scss";
import { Link } from "react-router-dom";
import Order from "../MainProject/Order/Order";

export default function Pagination({ total }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item); // Устанавливаем выбранный элемент
    setIsOpen(true); // Открываем модальное окно
  };

  const cancelModal = () => {
    setIsOpen(false);
    setSelectedItem(null); // Сбрасываем выбранный элемент при закрытии
  };

  return (
    <div className="Pagination">
      {total.map((elem) => {
        return (
          <div className="Pagination__content" key={elem.id}>
            <div>
              <Link to={`/${elem.title.toLowerCase()}`}>
                <img src={elem.img} alt="photo" />
                <h1>{elem.title}</h1>
                <p>{elem.desc}</p>
              </Link>
              <div>
                <button>{elem.price}</button>
                <button onClick={() => handleClick(elem)}>{elem.order}</button> {/* Передаем элемент */}
              </div>
            </div>
          </div>
        );
      })}
      {isOpen && selectedItem && (
        <Order cancelModal={cancelModal} item={selectedItem} /> // Передаем выбранный элемент в модальное окно
      )}
    </div>
  );
}
