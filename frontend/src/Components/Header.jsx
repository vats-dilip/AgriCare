import { React, useContext, useEffect, useState } from "react";
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
import { AuthContext } from "../AuthContext";

function Header() {
  const [authText, setAuthText] = useState("Login");
  const [isAuthenticated, setIsAuthenticated, isAdmin, setIsAdmin] =
    useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState("");

  /*-----------------------Firebase authentication----------------------*/

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

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setIsAuthenticated(true);
        if (user.email === "dilipvats3@gmail.com") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
        setUserName(user.displayName);
        setProfileImage(user.photoURL);
        setAuthText("Logout");
      } else {
        setIsAuthenticated(false);
        setAuthText("Login");
      }
    });
  }, [isAuthenticated]);

  const loginHandler = () => {
    if (isAuthenticated) {
      // authenticated then log out
      signOut(auth).then((response) => {
        setIsAuthenticated(false);
        setIsAdmin(false);
        toast.success("Logged Out", {
          position: toast.POSITION.TOP_CENTER,
        });
        setAuthText("Login");
      });
    } else {
      // login
      signInWithPopup(auth, provider)
        .then((result) => {
          setUserName(result.user.displayName);
          setProfileImage(result.user.photoURL);
          setIsAuthenticated(true);
          if (result.user.email === "dilipvats3@gmail.com") {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
          toast.success("Logged In", {
            position: toast.POSITION.TOP_CENTER,
          });
          setAuthText("Logout");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  /*--------------------------------------------------------------------*/

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
          <div className="detail-container">
            {isAuthenticated && (
              <div className="detail">
                <div className="photo">
                  <img src={profileImage} />
                </div>
                <div className="name-div">
                  <p className="name">{userName}</p>
                  {isAdmin && (
                    <div className="admin">
                      <p>Admin</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="login-button" onClick={loginHandler}>
            <p>{authText}</p>
          </div>
        </Left>
      </div>
      <div className="lower">
        <div className="button-container">
          <Link
            to="/home"
            className="home"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <p>Home</p>
          </Link>
          <Link
            to="/scheme"
            className="scheme"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <p>Scheme & Services</p>
          </Link>
          <Link to="/cropPredicition" className="prediction">
            <p>Crop Prediction</p>
          </Link>
          <Link
            to="/news"
            className="news"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
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
  height: 7.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 10;
  background-color: white;

  .upper {
    min-height: 6rem;
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
        font-size: 13px;
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
      height: 4.5rem;
      width: 4.5rem;
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
      margin-left: 1rem;
      margin-top: 4px;
      font-family: poppins;
      font-weight: 700;
      font-size: 32px;
    }
  }
`;

const Menu = styled.div`
  height: 100%;
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .detail-container {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;

    .detail {
      margin-top: 6px;
      height: 80%;
      min-width: 85%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      .photo {
        width: 3.5rem;
        height: 3.5rem;
        border-right: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 3.5rem;
        border: 1px solid darkgreen;

        img {
          width: 4rem;
          height: 4rem;
          object-fit: contain;
        }
      }

      .name-div {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;

        .name {
          margin: 0;
          margin-left: 10px;
          font-family: poppins;
          font-size: 16px;
          font-weight: 600;
          color: drakgreen;
        }

        .admin {
          margin-top: 2px;
          width: 35%;
          margin-left: 10px;
          font-family: poppins;
          font-size: 10px;
          font-weight: 500;
          color: drakgreen;
          border: 1px solid darkgreen;
          box-sizing: border-box;
          border-radius: 3px;
          display: flex;
          justify-content: center;
          align-items: center;

          p {
            margin: 0;
          }
        }
      }
    }
  }

  .login-button {
    margin-top: 8px;
    height: 3.1rem;
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
      margin: 0;
      color: white;
      font-family: poppins;
    }
  }
`;
