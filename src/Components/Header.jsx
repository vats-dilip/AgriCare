import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { Link } from "react-router-dom";

function Header() {

  const [islogged, setIsLogged] = useState(false);
  const [authText, setAuthText] = useState("Login");

  const firebaseConfig = {
    apiKey: "AIzaSyD9fYxXGJ6OhtfbwGpcKt5BADZ_FOiAlGM",
    authDomain: "agricare00.firebaseapp.com",
    projectId: "agricare00",
    storageBucket: "agricare00.appspot.com",
    messagingSenderId: "1051498544113",
    appId: "1:1051498544113:web:e4cfa9e42d321d3b6ca250",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const loginHandler = () => {
    if (islogged) {
      signOut(auth).then((response) => {
        setAuthText("Login");
        setIsLogged(false);
        toast.success("Logged Out", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
    } else {
      // login
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log("user is : ", result.user);
          toast.success("Logged In", {
            position: toast.POSITION.TOP_CENTER,
          });
          console.log(result);
          setIsLogged(true);
          setAuthText("Logout");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Container>
      <div className="upper">
        <Right>
          <div className="logo-container">
            <img src="/images/logo.png" />
          </div>
          <div className="text">
            <p>AgriCare</p>
          </div>
        </Right>
        <Menu></Menu>
        <Left>
          <div className="login-button" onClick={loginHandler}>
            <p>{authText}</p>
          </div>
        </Left>
      </div>
      <div className="lower">
        <div className="button-container">
          <Link to="/home" className="home">
            <p>Home</p>
          </Link>
          <Link to="/scheme" className="scheme">
            <p>Scheme & Services</p>
          </Link>
          <Link to="/cropPredcition" className="prediction">
            <p>Crop Prediction</p>
          </Link>
          <Link className="news">
            <p> News</p>
          </Link>
          <Link to="/forecast" className="forecast">
            <p>Weather Forecast</p>
          </Link>
        </div>
      </div>

      <ToastContainer autoClose={1000} hideProgressBar={true} />
    </Container>
  );
}


export default Header;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 9.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 10;
  background-color: white;

  .upper {
    min-height: 6.8rem;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lower {
    border-top: 1px solid black;
    width: 100%;
    flex: 1;
    background-color: darkgreen;
    border-bottom: 1px solid black;

    display: flex;
    justify-content: center;
    align-items: center;

    .button-container {
      height: 100%;
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-weight: 400;
        color: white;
        font-size: 14px;
        margin: 0;
        margin-top: 2px;
        font-family: poppins;
      }

      .home :hover {
        cursor: pointer;
        text-decoration: underline;
      }

      .scheme :hover {
        cursor: pointer;
        text-decoration: underline;
      }
      .prediction :hover {
        cursor: pointer;
        text-decoration: underline;
      }
      .news :hover {
        cursor: pointer;
        text-decoration: underline;
      }
      .forecast :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`;

const Right = styled.div`
  height: 100%;
  flex: 1;
  /* margin-left: 4.5rem; */
  display: flex;
  justify-content: start;
  align-items: center;
  overflow: hidden;


  .logo-container {
    height: 100%;
    width: 5rem;
    display: flex;
    justify-content: start;
    align-items: center;
    /* background-color: blue; */

    img {
      height: 5.2rem;
      width: 5.2rem;
      object-fit: cover;
      object-position: top;
    }
  }

  .text {
    height: 100%;
    display: flex;
    align-items: center;

    justify-content: start;
    flex: 1;

    p {
      margin: 0;
      margin-left: 1.7rem;
      margin-top: 4px;
      font-family: poppins;
      font-weight: 700;
      font-size: 36px;
    }
  }
`

const Menu = styled.div`
  height: 100%;
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Left = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;

  .login-button {
    margin-top: 8px;
    height: 3.5rem;
    width: 7.5rem;
    background-color: black;
    border-radius: 40px;
    cursor: pointer;
    transition: opacity 0.15s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      opacity: 0.8;
    }


    p {
      margin:0;
      color: white;
      font-family: poppins;
    }
  }
`;
