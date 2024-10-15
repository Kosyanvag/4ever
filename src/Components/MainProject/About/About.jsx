import React, { useState } from "react";
import "./About.scss"
import Modal from "../Modal/Modal";

export default function About() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(true)
    }
    const cancelModal = () => {
      setIsOpen(false)
    }
   
  return (
    <div className="About" id="about">
      <div className="About__content">
        <div className="About__content-left">
            
          <h1>4ever</h1>
          <p>
            Уникальные электронные свадебные приглашения, созданные для вашего
            идеального дня{" "}
          </p>
          <button onClick={handleClick}>Заказать</button>
          
        </div>
        <div className="About__content-right">
          <img src="./images/Logo/note.png" alt="" />
        </div>
      </div>
      {isOpen ? (
        <Modal cancelModal={cancelModal} />
      ) : (
        ""
      )}
    </div>
  );
}
