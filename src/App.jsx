// import { Routes, Route } from "react-router-dom";
// import Nav from "./Components/MainProject/Nav/Nav";
// import Project from "./Components/MainProject/Project";
// import About from "./Components/MainProject/About/About";
// import Products from "./Components/MainProject/Products/Products";
// import ProductDetails from "./Components/ProductDetails/ProductDetails";
// import Pure from "./Components/Pure/Pure";

// export default function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Project />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//       </Routes>
//     </div>
//   );
// }
import { Routes, Route } from "react-router-dom";
import Project from "./Components/MainProject/Project";
import Pure from "./Components/Pure/Pure";
import Serene from "./Components/Serene/Serene";
import Bliss from "./Components/Bliss/Bliss";
import Eternal from "./Components/Eternal/Eternal";
import Embrace from "./Components/Embrace/Embrace";
import Velvet from "./Components/Velvet/Velvet";
import Harmony from "./Components/Harmony/Harmony";
import Radiance from "./Components/Radiance/Radiance";
import Spark from "./Components/Spark/Spark";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Project />} />
        <Route path="/serene" element={<Serene />} />
        <Route path="/bliss" element={<Bliss />} />
        <Route path="/eternal" element={<Eternal />} />
        <Route path="/pure" element={<Pure />} />
        <Route path="/embrace" element={<Embrace />} />
        <Route path="/velvet" element={<Velvet />} />
        <Route path="/harmony" element={<Harmony />} />
        <Route path="/radiance" element={<Radiance />} />
        <Route path="/spark" element={<Spark />} />
      </Routes>
    </div>
  );
}
