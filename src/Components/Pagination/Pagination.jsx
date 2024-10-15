import { useState } from "react";
import "./Pagination.scss";
import { Link } from "react-router-dom";
import Modal from "../MainProject/Modal/Modal";

export default function Pagination({ total }) {

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
      setIsOpen(true)
  }
  const cancelModal = () => {
    setIsOpen(false)
  }






  return (
    <div className="Pagination">
      {total.map((elem) => {
        return (
          <div className="Pagination__content" key={elem.id}>
            <div key={elem.id}>
              <Link to={`/${elem.title.toLowerCase()}`}>
                <img src={elem.img} alt="photo" />
                <h1>{elem.title}</h1>
                <p>{elem.desc}</p>
              </Link>
              <div>
                <button>{elem.price}</button>
                <button onClick={handleClick}>{elem.order}</button>
              </div>
            </div>
          </div>
        );
      })}
      {isOpen ? (
        <Modal cancelModal={cancelModal} />
      ) : (
        ""
      )}
    </div>
  );
}
