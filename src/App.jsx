// import { Routes, Route } from "react-router-dom";
// import Project from "./Components/MainProject/Project";
// import Pure from "./Components/Pure/Pure";
// import Serene from "./Components/Serene/Serene";
// import Bliss from "./Components/Bliss/Bliss";
// import Eternal from "./Components/Eternal/Eternal";
// import Embrace from "./Components/Embrace/Embrace";
// import Velvet from "./Components/Velvet/Velvet";
// import Harmony from "./Components/Harmony/Harmony";
// import Radiance from "./Components/Radiance/Radiance";
// import Siluette from "./Components/Siluette/Siluette";
// import Spark from "./Components/Spark/Spark";
// import Eclipse from "./Components/Eclipse/Eclipse";

// export default function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Project />} />
//         <Route path="/serene" element={<Serene />} />
//         <Route path="/bliss" element={<Bliss />} />
//         <Route path="/eternal" element={<Eternal />} />
//         <Route path="/pure" element={<Pure />} />
//         <Route path="/embrace" element={<Embrace />} />
//         <Route path="/velvet" element={<Velvet />} />
//         <Route path="/harmony" element={<Harmony />} />
//         <Route path="/radiance" element={<Radiance />} />
//         <Route path="/siluette" element={<Siluette />} />
//         <Route path="/spark" element={<Spark />} />
//         {/* <Route path="/Eclipse" element={<Eclipse />} /> */}
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
import Siluette from "./Components/Siluette/Siluette";
import Spark from "./Components/Spark/Spark";
import { useTranslation } from "react-i18next";

export default function App() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // Задаём класс шрифта на основе текущего языка
  const fontClass = currentLang === "ru" ? "font-ru" : "font-hy";

  return (
    <div className={fontClass}>
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
        <Route path="/siluette" element={<Siluette />} />
        <Route path="/spark" element={<Spark />} />
        {/* <Route path="/Eclipse" element={<Eclipse />} /> */}
      </Routes>
    </div>
  );
}
