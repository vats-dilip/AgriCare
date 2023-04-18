import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Hero() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 580,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Container>
      This is hero section
      {/* <SliderContainer {...settings}>
        <div className="image-container">
          <img src="/images/farm-1.jpg" />
        </div>
        <div className="image-container">
          <img src="/images/farm-2.webp" />
        </div>
      </SliderContainer> */}
    </Container>
  );
}

export default Hero;

const Container = styled.div`
  width: 100%;
  /* height: 30rem; */

  height: calc(100vh - 9.3rem);
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderContainer = styled(Slider)`
  width: 100%;
  height: 100%;
  background-color: red;

  .image-container {
    width: 100%;
    height: 100%;

    overflow: hidden;
    background-color: blue;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
