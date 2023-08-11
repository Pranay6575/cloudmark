import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import StateNote from "./context/notes/StateNote"



function App() {
  return (
    <>
   <StateNote>
      <BrowserRouter>
        <Navbar />
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        </div>
      </BrowserRouter>
      </StateNote>
    </>
  );
}

export default App;
