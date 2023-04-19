import React from "react";
import styled from "styled-components";

function SchemeCard({ image, name, description, sector }) {
  return (
    <Container>
      <div className="left">
        <div className="name">{name}</div>
        <div className="description">{description}</div>
        <div className="buttons">
          <div className="sector">{sector}</div>
          <div className="apply-btn">Apply</div>
        </div>
      </div>
      <div className="right">
        <img src={image} />
      </div>
    </Container>
  );
}

export default SchemeCard;

const Container = styled.div`
  width: 100rem;
  height: 13.8rem;
  border: 1px solid #bbb9b9ae;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: poppins;
  background-color: white;
  box-shadow: 3px 3px 6px #d6d6d66b;

  .left {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 2px;

    .name {
      min-height: 2.8rem;
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      font-weight: 700;
      font-size: 16px;
      color: darkgreen;
    }

    .description {
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: start;
      font-size: 13px;
      font-weight: 500;
      color: #000000e1;
    }

    .buttons {
      height: 3rem;
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: end;
      gap: 1.4rem;

      .sector {
        width: 12.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: #1c1b1b;
        color: white;
        font-size: 12px;
      }

      .apply-btn {
        width: 8.2rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        cursor: pointer;
        background-color: #006400eb;
        color: white;
        transition: opacity 0.25s;
        font-size: 12px;

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
    padding: 12px;
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
