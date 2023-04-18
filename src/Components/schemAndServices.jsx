import React from "react";
import styled from "styled-components";
import SchemeCard from "./SchemeCard";

const SchemAndServices = () => {
  return (
    <Container>
      <div className="scheme-container">
        <SchemeCard />
        <SchemeCard />
        <SchemeCard />
      </div>
    </Container>
  );
};

export default SchemAndServices;

const Container = styled.div`
  height: 100vh;
  padding-top: 9.3rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  .scheme-container {
    width: 70%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 2.5rem;
  }
`;
