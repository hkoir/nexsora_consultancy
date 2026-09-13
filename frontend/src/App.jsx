import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage"

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
   
      <Navbar />   
      <HomePage />
      <Footer />
    
    </>
  );
}

export default App;