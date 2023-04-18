import React from "react";
import styled from "styled-components";

function SchemeCard() {
  return (
    <Container>
      <div className="left">
        <div className="name">
          Subsidy for Procurement of Farm Machinery and Implements
        </div>
        <div className="description">
          DBT on Farm Mechanization Scheme of Agriculture Department
        </div>
        <div className="buttons">
          <div className="sector">Horticulture</div>
          <div className="apply-btn">Apply</div>
        </div>
      </div>
      <div className="right">
        <img src="images/tractor.jpg" />
      </div>
    </Container>
  );
}

export default SchemeCard;

const Container = styled.div`
  width: 80%;
  height: 14.5rem;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: poppins;

  .left {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    gap: 5px;

    .name {
      height: 3rem;
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      font-weight: 700;
      font-size: 17px;
    }

    .description {
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: start;
      font-family: 16px;
      font-weight: 500;
    }

    .buttons {
      height: 3.5rem;
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: end;
      gap: 1.4rem;

      .sector {
        width: 11rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: #000000df;
        color: white;
      }

      .apply-btn {
        width: 10rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
        background-color: darkgreen;
        color: white;
        transition: opacity 0.25s;
        
        &:hover {
          opacity: 0.9;
        }

       &:active {
        opacity: 0.8;
       }
       
      }
    }
  }

  .right {
    width: 18rem;
    height: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      border: 1px solid lightgray;
    }
  }
`;
