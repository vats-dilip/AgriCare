import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <StyledSlider {...settings}>
      <Wrap>
        <img src="/images/img1.jpeg"></img>
      </Wrap>
      <Wrap>
        <img src="/images/img2.jpg"></img>
      </Wrap>
      <Wrap>
        <img src="/images/img3.jpg"></img>
      </Wrap>
      <Wrap>
        <img src="/images/img4.jpg"></img>
      </Wrap>
      <Wrap>
        <img src="/images/img5.jpg"></img>
      </Wrap>
      <Wrap>
        <img src="/images/img6.jpg"></img>
      </Wrap>
      <Wrap>
        <img src="/images/img7.jpg"></img>
      </Wrap>
    </StyledSlider>
  );
};

export default ImgSlider;

// const Carousel = styled.Slider`

// `

// const Slider = styled.Slider`
// `

const Wrap = styled.div`

  margin-top: 120px;
  width: 18rem;
  height: 300px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  
  img {
    border-radius: 5px;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    box-shadow: rgb(0 0 0 / 69%) 0px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
  }
`;



const StyledSlider = styled(Slider)`

  .slick-dots {
    bottom: 10px;
  }

  .slick-next:before,
  .slick-prev:before {
    color: #000;
    z-index: 10 !important;
  }

  .slick-next,
  .slick-prev {
    z-index: 10 !important;
    position: absolute;
    top: 65%;
    transform: translate(-50%, -50%);
  }

  .slick-next {
    right: 1px;
  }

  .slick-prev {
    left: 20px;
  }
`;
