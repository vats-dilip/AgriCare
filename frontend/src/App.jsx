import { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import SchemAndServices from "./Components/SchemesAndServices";
import News from "./Components/News";
import Weather_forcast from "./Components/WeatherForecast.jsx";
import Crop_prediction from "./Components/CropPrediction";
import { Outlet, Route, Routes } from "react-router-dom";
import Weather from "./Components/Weather";
import ScrollToTop from "react-scroll-to-top";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <ScrollToTop className="scrollToTop" smooth color="black" />
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #f8fff5;
  height: auto;
  width: 100%;
`;
