import React from "react";
import styled from "styled-components";

const CropPrediction = () => {
  return <Container>
  {/* <div className="center-container">
    hello peter
  </div> */}
  </Container>;
};

export default CropPrediction;

const Container = styled.div`
  display:flex;
  min-height: 100vh;
  height: auto;
  padding-top: 9.3rem;
  border-radius: 8px;
  justify-content: center;
  align-items: start;
  overflow-x: hidden;
  height: 100vh;
  width: 100%;

  .center-container{
    display: flex;
    min-height: 85vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 3px 2px 10px #d6d6d690;
    border-radius: 5px;
    padding-bottom: 2.5rem;
    width: 69%;
    gap: 2.5rem;
  }
`;
