import React from "react";
import styled from "styled-components";
import SchemeCard from "./SchemeCard";

const SchemAndServices = () => {
  return (
    <Container>
      <div className="scheme-container">
        <div className="heading">
          <p>Schemes & Services</p>
        </div>
        <SchemeCard />
        <SchemeCard />
        <SchemeCard />
        <SchemeCard />
        <SchemeCard />
        <SchemeCard />
      </div>
    </Container>
  );
};

export default SchemAndServices;

const Container = styled.div`
  min-height: 100vh;
  height: auto;
  padding-top: 9.3rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8fff5;
  overflow-x: hidden;

  .scheme-container {
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 2.5rem;
    background-color: white;
    box-shadow: 3px 1px 10px #d6d6d66d;
    padding-bottom: 2.5rem;

    .heading {
      margin-top: 3rem;
      width: 101rem;
      height: 5rem;
      border-bottom: 1px solid #bbb9b9ae;
      display: flex;
      justify-content: start;
      align-items: center;
      box-shadow: 0px 3px 6px -3px #d6d6d66b;

      p {
        margin: 0;
        margin-bottom: 10px;
        font-family: poppins;
        font-size: 35px;
        font-weight: 500;
        color: darkgreen;
      }
    }
  }
`;
