// import { useState } from "react";
// import CustomButton from "./components/CustomButton";
import NavBar from "./components/navBar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  // const [count, setCount] = useState(0);

  // const add = () => {
  //   setCount((count) => count + 1);
  // };
  // const subtract = () => {
  //   setCount((count) => count - 1);
  // };
  // const reset = () => {
  //   setCount(0);
  // };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col h-screen items-center justify-center bg-amber-100">
        {/* <div> {count} </div>
        <div className="flex flex-row space-x-3">
          <div>
            <CustomButton
              title="Add"
              containerStyles=" bg-emerald-600 rounded-3xl p-1"
              handleClick={add}
            />
          </div>

          <div>
            <CustomButton
              title="reset"
              containerStyles=" bg-amber-300  rounded-3xl p-1"
              handleClick={reset}
            />
          </div>

          <div>
            <CustomButton
              title="subtract"
              containerStyles=" bg-red-400  rounded-3xl p-1"
              handleClick={subtract}
            />
          </div>
        </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
