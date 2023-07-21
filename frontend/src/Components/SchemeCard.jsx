import React, { createContext, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SchemeCard({
  image,
  name,
  description,
  sector,
  id,
  setIsApplyActive,
  isApplyActive,
  onApplyClick,
}) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useContext(AuthContext);

  const applyHandler = () => {
    if (isAuthenticated) {
      navigate(`/scheme/apply/${id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
      onApplyClick();
    } else {
      toast.info("Login to register!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <Container>
      <div className="left">
        <div className="name">{name}</div>
        <div className="description">{description}</div>
        <div className="buttons">
          <div className="sector">{sector}</div>
          <div className="apply-btn" onClick={applyHandler}>
            Apply
          </div>
        </div>
      </div>
      <div className="right">
        <img src={image} />
        <div className="for-id">
          <p>{id}</p>
        </div>
      </div>
      <ToastContainer autoClose={1000} hideProgressBar={true} />
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
        text-decoration: none;

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
    position: relative;
    width: 18rem;
    height: 100%;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    .for-id {
      position: absolute;
      top: 0.5rem;
      right: 0.8rem;
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 0.3rem;
      z-index: 2;
      background-color: darkgreen;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        margin: 0;
        color: white;
        font-size: 13px;
      }
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      border: 1px solid lightgray;
    }
  }
`;
