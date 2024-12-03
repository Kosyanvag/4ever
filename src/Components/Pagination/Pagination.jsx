import { useState } from "react";
import { Link } from "react-router-dom";
import Order from "../MainProject/Order/Order";
import { useTranslation } from "react-i18next"; 
import "./Pagination.scss";

export default function Pagination({ total }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const cancelModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="Pagination">
      {total.map((elem) => {
        return (
          <div className="Pagination__content" key={elem.id}>
            <div>
              <Link to={`/${elem.title.toLowerCase()}`}>
                <img src={elem.img} alt="card" />
                <h1>{elem.title}</h1>
                <p>{elem.desc}</p>
              </Link>
              <div>
                <button>{elem.price}</button>
                <button onClick={() => handleClick(elem)}>{elem.order}</button>
              </div>
            </div>
          </div>
        );
      })}
      {isOpen && selectedItem && (
        <Order cancelModal={cancelModal} item={selectedItem} />
      )}
    </div>
  );
}
