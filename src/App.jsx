import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Guideline from "./pages/Guideline";
import Registration from "./pages/Registration";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Event from "./pages/Event";
import HomeNavbar from "./components/HomeNavbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeNavbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/guidelines"} element={<Guideline />} />
        <Route path={"/registration"} element={<Registration />} />
        <Route path={"/events"} element={<Event />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
