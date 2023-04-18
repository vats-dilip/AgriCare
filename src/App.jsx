import { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import SchemAndServices from "./Components/schemAndServices";
import News from "./Components/News";
import Weather_forcast from "./Components/Weather_forcast.jsx";
import Crop_prediction from "./Components/Crop_prediction";
import { Outlet, Route, Routes } from "react-router-dom";


import Signup from "./Components/login";
import Weather from "./Components/Weather";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <br></br><br></br><br></br><br></br><br></br> */}
      {/* <Weather /> */}

      {/* <SchemAndServices /> */}

      {/* <Weather_forcast /> */}
     
    </>
  );
}

export default App;
