import Nav from "./Nav/Nav";
import Sliders from "./Sliders/Sliders";
import Products from "./Products/Products";

import "./Project.scss";
import Footer from "./../Footer/Footer";

export default function Project() {
  return (
    <section>
      <Nav />
      <Sliders />
      <Products />
      <Footer />
    </section>
  );
}
