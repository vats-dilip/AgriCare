import React from "react";
import styled from "styled-components";
import forecast from "/images/hero-img.jpeg";
import image from "/images/farmer.png";
import ImgSlider from "./imgSlider";


function Hero() {
  // let settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 580,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  // };

  return (
    <>
      {/* <sliderDiv>
        <p>hello</p>
        <img src={image} />
      </sliderDiv> */}
      {/* <CarouselSlider /> */}
     {/* <imgSlider></imgSlider> */}
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
margin-top:50px;
  width: 100%;
  /* height: 30rem; */

  height: calc(100vh - 9.3rem); 
  ${'' /* height:auto; */}
  background-color: rgb(248, 255, 245);
  display: flex;
  flex-direction: row;
  align-items: center;
  ${"" /* background-image: url(${forecast}); */}

  .left {
      padding-top:80px;
      padding-left:50px;
      padding-right:50px;
      ${'' /* background-color: lightpink;  */}
      height: 100%;
      flex: 4;
      margin-top: 100px;
      overflow: hidden;
    

    p{
      font-width:15px;
      font-size:17px;
      margin-top:0px;
      ${'' /* font-family:NotoSans-Ligt !important; */}
    }

    h1{
    margin: 0px 0px 10px;
    font-family: poppins;
    font-size: 32px;
    font-weight: 500;
    color: darkgreen;
    }

    h3{
      ${'' /* font-family:NotoSans !important ; */}
    }
  }

  .right {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      ${'' /* background-color: red;  */}
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

