import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

function Apply() {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/scheme");
  };

  return (
    <Container>
      <div className="back-div">
        <div className="back-btn" onClick={goBackHandler}>
          <img src="/images/left-arrow.png" />
        </div>
      </div>
      <div className="form-div">Helod</div>
    </Container>
  );
}

export default Apply;

const Container = styled.div`
  width: 101rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  .back-div {
    height: 3.5rem;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;

    .back-btn {
      width: 6rem;
      height: 2.3rem;
      border-radius: 4px;
      background-color: darkgreen;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: opacity 0.25s;

      &:hover {
        opacity: 0.9;
      }

      &:active {
        opacity: 0.8;
      }

      img {
        width: 40%;
      }
    }
  }

  .form-div {
    flex: 1;
    width: 100%;
    background-color: blue;
  }
`;
