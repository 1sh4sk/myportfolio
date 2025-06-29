import React, { useState } from "react";
import Navigationbar from "./Navbar/Navigationbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import Aboutme from "./About/Aboutme";
import Resume from "./Resume";
import Works from "./Works";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import HireMeButton from "./components/HireMeButton/HireMeButton";


function App() {
  const [toggle, setToggle] = useState(false);


  return (
    <div className="App">
      <Router>
        <Navigationbar toggle={toggle} setToggle={setToggle} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Aboutme" element={<Aboutme />}></Route>
          <Route path="/Resume" element={<Resume />}></Route>
          <Route path="/Works" element={<Works />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </Router>
      <Footer />

      <HireMeButton />
    </div>
  );
}

export default App;
