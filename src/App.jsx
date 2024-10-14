import { Routes, Route } from "react-router-dom";
import Nav from "./Components/MainProject/Nav/Nav";
import Project from "./Components/MainProject/Project";
import About from "./Components/MainProject/About/About";
import Products from "./Components/MainProject/Products/Products";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Project />
    </div>
  );
}
