import { useState } from "react";
import "./About.scss";
import Modal from "../Modal/Modal";

import { useTranslation } from "react-i18next";
export default function About() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const cancelModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="About" id="about">
      <div className="About__content">
        <div className="About__content-left">
          <h1>
            <span>4</span>ever
          </h1>
          <p>{t("about.aboutText")}</p>
          <button onClick={handleClick}>{t("about.aboutOrder")}</button>
        </div>
        <div className="About__content-right">
          <img src="./images/Logo/note.png" alt="" />
        </div>
      </div>
      {isOpen ? <Modal cancelModal={cancelModal} /> : ""}
    </div>
  );
}
