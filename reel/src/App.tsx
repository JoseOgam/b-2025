// import { useState } from "react";
// import CustomButton from "./components/CustomButton";
import NavBar from "./components/navBar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <NavBar />
      </div>
      <main className="flex items-center justify-center grow pt-16 bg-amber-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
