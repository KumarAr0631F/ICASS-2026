import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Guideline from "./pages/Guideline";
import Registration from "./pages/Registration";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConferenceSchedule from "./pages/ConferenceSchedule";
import TravelGuide from "./pages/TravelGuide";
import Accomodation from "./pages/Accomodation";
import VenueDetails from "./pages/VenueDetails";
import Patrons from "./pages/Patrons";
import OrganisingCommitte from "./pages/OrganisingCommitte";
import AdvisoryCommittee from "./pages/AdvisoryCommittee";
import TechnicalProgramCommittee from "./pages/TechnicalProgramCommittee";
import Tracks from "./pages/Tracks";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/callforpapers/guidelines" element={<Guideline />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/schedule" element={<ConferenceSchedule />} />
        <Route path="/venue" element={<TravelGuide />} />
        <Route path="/accommodation" element={<Accomodation />} />
        <Route path="/tourist-places" element={<VenueDetails />} />
        <Route path="/patrons" element={<Patrons />} />
        <Route path="/organising-committee" element={<OrganisingCommitte />} />
        <Route path="/advisory-committee" element={<AdvisoryCommittee />} />
        <Route path="/callforpapers/tracks-info" element={<Tracks />} />
        <Route
          path="/technical-committee"
          element={<TechnicalProgramCommittee />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
