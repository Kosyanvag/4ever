import Nav from "./Nav/Nav";
import "./Project.scss";
import Slider from "./Slider/ImageSlider";

import Products from "./Products/Products";
import Footer from "../Footer/Footer";
export default function Project() {
  return (
    <section>
      <Nav />
      <Slider />
      <Products />
      <Footer />
    </section>
  );
}
