import React from "react";
import styled from "styled-components";
import forecast from "/images/hero-img.jpeg";
import image from "/images/farmer.png";
import ImgSlider from "./imgSlider";


function Hero() {
  

  return (
    <>
      
     <ImgSlider></ImgSlider>
      <Container>

        {/* This is hero section */}
        <div className="left">
        <h1>Solution for farmers</h1>
          <p>
           The AgriCare App is a comprehensive platform that offers a range of services to farmers across India.
           With features like crop suggestion, weather forecast, and the latest agricultural news, this app is a one-stop-shop for all your farming needs.
          </p>
          <p>
            In addition to providing valuable information on crop suggestion and the use of high-quality input products, 
            the AgriCare App also offers detailed insights into government schemes under which farmers can register to avail various benefits.
          </p>
          <p>
            Whether you're looking for expert advice on chemical dosage or need help with purchasing or selling input or output products,
            the AgriCare App has got you covered. With customised advisory services based on real-time data,
            this app ensures that farmers have access to the most up-to-date information at their fingertips.
          </p>
          <p>
            So if you're a farmer looking to stay ahead of the game,
            download the AgriCare App today and take the first step towards a more successful and sustainable farming future.
          </p>
        </div>
        <div className="right">
          <img src={image} />
        </div>
      </Container>
      
    </>
  );
}

export default Hero;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 9.3rem); 
  background-color: rgb(248, 255, 245);
  ${'' /* background-color:light-blue; */}
  display: flex;
  flex-direction: row;
  align-items: center;

  .left {
    background-color: rgb(248, 255, 245);
      padding-top:40px;
      padding-left:78px;
      padding-right:50px;
      height: 100%;
      flex: 4;
      margin-top: 100px;
      overflow: hidden;

    p{
      font-size:16px;
      margin-top:0px;
      font-family: poppins;
      }

    h1{
    margin: 0px 0px 40px;
    font-family: poppins;
    font-size: 45px;
    font-weight: 500;
    color: darkgreen;
    }
  }

  .right {
    background-color: rgb(248, 255, 245);
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      height:100%;
      flex: 3;

    img {
      width: 100%;
      height: 70% !important;
      overflow: hidden;
      border-radius: 10px;
    }
  }
`;

