import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SchemeCard from "./SchemeCard";
import Apply from "./Apply";
import { useLocation } from "react-router";

const SchemesAndServices = () => {
  const [schemes, setSchemes] = useState([{}]);
  const [isApplyActive, setIsApplyActive] = useState(false);

  const location = useLocation();

  const handleApplyClick = () => {
    setIsApplyActive(true);
  };

  const fetchSchemes = async () => {
    await fetch("http://localhost:8080/getAllSchemes")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setSchemes(data);
      });
  };

  useEffect(() => {
    if (location.pathname === "/scheme") {
      setIsApplyActive(false);
    }
    fetchSchemes();
  }, [location.pathname]);

  const cards = schemes.map((card) => {
    return (
      <SchemeCard
        id={card._id}
        name={card.name}
        description={card.description}
        image={card.image}
        sector={card.sector}
        isApplyActive={isApplyActive}
        setIsApplyActive={setIsApplyActive}
        onApplyClick={handleApplyClick}
      />
    );
  });

  return (
    <Container>
      <div className="center-container">
        <div className="heading">
          <p>Schemes & Services</p>
        </div>
        <div className="scheme-container">
          {isApplyActive && <Apply />}
          {!isApplyActive && cards}
        </div>
      </div>
    </Container>
  );
};

export default SchemesAndServices;

const Container = styled.div`
  min-height: 100vh;
  height: auto;
  padding-top: 9.3rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: #f8fff5;
  overflow-x: hidden;

  .center-container {
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

    .heading {
      margin-top: 2.8rem;
      width: 101rem;
      height: 4.5rem;
      border-bottom: 1px solid #bbb9b9ae;
      display: flex;
      justify-content: start;
      align-items: center;
      box-shadow: 0px 3px 6px -3px #d6d6d66b;

      p {
        margin: 0;
        margin-bottom: 10px;
        font-family: poppins;
        font-size: 32px;
        font-weight: 500;
        color: darkgreen;
      }
    }

    .scheme-container {
      /* background-color: blue; */
      flex: 1;
      width: 101rem;
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;
      gap: 2.5rem;
    }
  }
`;
