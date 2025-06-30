import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlansFAQ from "./components/PlansFAQ";
import DeliveryAreas from "./components/DeliveryAreas";
import Contact from "./components/contact";
import Purchase from "./components/Purchase";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<PlansFAQ />} />
        <Route path="/deliveryareas" element={<DeliveryAreas/>} />
        <Route path="/contact" element={<Contact/>} />
         <Route path="/purchase" element={<Purchase/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
