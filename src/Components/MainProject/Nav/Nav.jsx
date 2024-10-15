// import { useState } from "react";
// import "./Nav.scss";
// export default function Nav() {
//   const [activeSection, setActiveSection] = useState("");
//   return (
//     <nav className="Nav">
//       <div className="Nav__content">
//         <div className="Nav__content-logo">
//           <img src="./images/Main/Nav/logo2.jpg" alt="photo" />
//         </div>
//         <div className="Nav__content-block">
//           <ul>
//             <li ><a href="#about" className={activeSection === "about" ? "active" : ""}>Заказать</a></li>
//             <li ><a href="#sliders" className={activeSection === "sliders" ? "active" : ""}>Новости</a></li>
//             <li><a href="#products" className={activeSection === "products" ? "active" : ""}>Приглашения</a></li>
//             <li><a href="#footer" className={activeSection === "footer" ? "active" : ""}>О нас</a></li>
//           </ul>
//         </div>
//         <div className="Nav__content-socials">
//           <p>
//             <a href="tel:+ 995 598 40 34 99">+ 995 598 40 34 99</a>
//           </p>
//         </div>
//       </div>
//     </nav>
//   );
// }


import { useState, useEffect } from "react";
import "./Nav.scss";

export default function Nav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "sliders", "products", "footer"];
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = window.pageYOffset + rect.top;

          if (scrollPos >= offsetTop && scrollPos <= offsetTop + element.offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="Nav">
      <div className="Nav__content">
        <div className="Nav__content-logo">
          <img src="./images/Main/Nav/logo2.jpg" alt="photo" />
        </div>
        <div className="Nav__content-block">
          <ul>
            <li><a href="#about" className={activeSection === "about" ? "active" : ""}>Заказать</a></li>
            <li><a href="#sliders" className={activeSection === "sliders" ? "active" : ""}>Новости</a></li>
            <li><a href="#products" className={activeSection === "products" ? "active" : ""}>Приглашения</a></li>
            <li><a href="#footer" className={activeSection === "footer" ? "active" : ""}>О нас</a></li>
          </ul>
        </div>
        <div className="Nav__content-socials">
          <p>
            <a href="tel:+995598403499">+ 995 598 40 34 99</a>
          </p>
        </div>
      </div>
    </nav>
  );
}

