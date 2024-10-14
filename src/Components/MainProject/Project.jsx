import Nav from "./Nav/Nav";
import About from "./About/About";
import Sliders from "./Sliders/Sliders";
import Products from "./Products/Products";
import Footer from "../Footer/Footer";

import "./Project.scss";



export default function Project() {
  return (
    <section>
      <Nav />
      <About/>
      <Sliders />
      <Products />
      <Footer />
    </section>
  );
}
