import "./App.css";
import { Routes, Route } from "react-router-dom";
import NAVBAR from "../NAVBAR/Navbar";
import FOOTER from "../FOOTER/Footer";
import HOME from "../HOME/Home";
import SEND from "../SEND_PACKAGE/SendPackage";
import DELIVER from "../DELIVERY_PERSON/DeliveryPerson";
import LOGIN from "../LOGIN/Login";
import PROFILE from "../PROFILE/Profile";
import FAQ from "../FAQ/Faq";
import NOT_FOUND from "../NOT_FOUND/NotFound";

function App() {
  return (
    <div className="app">
      <NAVBAR />
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/send" element={<SEND />} />
        <Route path="/deliver" element={<DELIVER />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/profile" element={<PROFILE />} />
        <Route path="/login" element={<LOGIN />} />
        <Route path="*" element={<NOT_FOUND />} />
      </Routes>
      <FOOTER />
    </div>
  );
}

export default App;
