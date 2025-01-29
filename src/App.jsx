import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Guideline from "./pages/Guideline";
import Registration from "./pages/Registration";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeNavbar from "./components/HomeNavbar";
import Committe from "./pages/Committe";
import ConferenceSchedule from "./pages/ConferenceSchedule";
import TravelGuide from "./pages/TravelGuide";
import Accomodation from "./pages/Accomodation";
import VenueDetails from "./pages/VenueDetails";
import AutoSlidingCarousel from "./pages/AutoSlidingCarousel";
const App = () => {
  return (
    <div>
      <Navbar />
      <HomeNavbar />
      <AutoSlidingCarousel/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/guidelines" element={<Guideline />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/committee" element={<Committe />} />
        <Route path="/schedule" element={<ConferenceSchedule />} />
        <Route path="/venue" element={<TravelGuide />} />
        <Route path="/accommodation" element={<Accomodation />} />
        <Route path="/tourist-places" element={<VenueDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
