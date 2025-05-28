import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomBlurOverlay from "./assets/Component/BottomBlur";
import Home from "./assets/Pages/Home";
import Pixbyte_Futuretech from "./assets/Pages/PixbyteFuturetech";
import HackerHouseGoa from "./assets/Pages/HackerHouseGoa";
import Packy from "./assets/Pages/Packy";
import CheeseCake from "./assets/Pages/TheCheeseCake";
import TheUnpaidCompany from "./assets/Pages/TheUnpaidCompany";
import QonnectMarketing from "./assets/Pages/QonnectMarketing";
import Volcasa from "./assets/Pages/VolcasaInternational";
import ScrollToTop from "./assets/Component/ScrollToTop";

function App() {
  return (
    <Router> 
      <ScrollToTop />
      
        <Routes basename ="/">
          <Route path="/" element={<Home />} /> 
          <Route path="/pixbytefuturetech" element={<Pixbyte_Futuretech />} />
          <Route path="/hackerhousegoa" element={<HackerHouseGoa />} />
          <Route path="/packy" element={<Packy />} />
          <Route path="/thecheesecake" element={<CheeseCake />} />
          <Route path="/volcasainternational" element={<Volcasa />} />
          <Route path="/theunpaidcompany" element={<TheUnpaidCompany />} />
          <Route path="/qonnectmarketing" element={<QonnectMarketing />} />
        </Routes>
        <BottomBlurOverlay />
      
    </Router>
  );
}

export default App;
