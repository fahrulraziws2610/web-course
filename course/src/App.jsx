import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./componen/NavbarComponent";
import FooterComponen from "./componen/FooterComponen";
import HomePage from "./page/HomePage";
import Syaratketen from "./page/Syaratketen";
import ClassPage from "./page/ClassPage";
import FaqPage from "./page/FaqPage";
import TestimoniPage from "./page/TestimoniPage";

function App() {
  return <div>
    <NavbarComponent />

    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/syarat" Component={Syaratketen}/>
      <Route path="/class" Component={ClassPage}/>
      <Route path="/faq" Component={FaqPage}/>
      <Route path="/testi" Component={TestimoniPage}/>
    </Routes>

    {/* <FooterComponen /> */}
  </div>;
}

export default App
