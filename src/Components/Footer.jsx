import React from "react";
import styled from "styled-components";

function Footer() {
  return <Container>
  <img src="/images/hero-img.jpeg"></img>
  </Container>;
}

export default Footer;

const Container = styled.div`
  height: 30rem;
  width: 100%;
  background-color: #1c1b1b;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: poppins;

  img{
    padding-left:300px;
    border-radius: 5px;
    width: 20%;
    height: 50%;
    object-fit: cover;

  }
`;
