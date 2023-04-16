import { React, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link ,resolvePath,useMatch ,useResolvedPath} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initializeApp } from 'firebase/app';
import { signInWithPopup,
  signOut,
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
 } from 'firebase/auth'

function Header() {

  const [islogged, setIsLogged] = useState(false);
  const [authText, setAuthText] = useState("Login")


  const firebaseConfig = {
    apiKey: "AIzaSyD9fYxXGJ6OhtfbwGpcKt5BADZ_FOiAlGM",
    authDomain: "agricare00.firebaseapp.com",
    projectId: "agricare00",
    storageBucket: "agricare00.appspot.com",
    messagingSenderId: "1051498544113",
    appId: "1:1051498544113:web:e4cfa9e42d321d3b6ca250"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const loginHandler = () => {
    if(islogged) {
      signOut(auth)
      .then((response) => {
        setAuthText("Login");
        setIsLogged(false);
        toast.success("Logged Out", {
          position: toast.POSITION.TOP_CENTER
        });
      })
    } else {
      // login 
      signInWithPopup(auth, provider)
      .then((result) => {
        console.log('user is : ',result.user);
        toast.success("Logged In", {
          position: toast.POSITION.TOP_CENTER
        });
        console.log(result);
        setIsLogged(true);
        setAuthText("Logout");
      })
      .catch((err)=>{
        console.log(err);
      })
    }
   
  }

  return (
    <Container>
    <div className='upper'>
    <Right>
        <div className='logo-container'>
          <img src="/images/logo.png"/>
        </div>
        <div className='text'>
          <p>AgriCare</p>
        </div>
      </Right>
      <Menu></Menu>
      <Left>
        <div className='login-button' onClick={loginHandler}>
          <p>{authText}</p>
        </div>
      </Left>
    </div>
    <div className='lower'>
      <div className='button-container'>
      <div className='home'>
          <p>Home</p>
        </div>
        <div className='scheme'>
          <p>Scheme & Services</p>
        </div>
        <div className='prediction'>
          <p>Crop Prediction</p>
        </div>
        <div className='news'>
          <p> News</p>
        </div>
        <div className='forecast'>
          <p>Weather Forecast</p>
        </div>
      </div>  
    </div>

     
      <ToastContainer 
        autoClose={1000}
        hideProgressBar={true}
      />
    </Container>
  )
}

function CustomLink({to,children,...props}){
  const useResolvedPath = useResolvedPath(to)
  const isActive = useMatch({path:resolvePath.pathname,end:true})
  return(
    <li className={path===to ? "active" :  ""}>
      <Link to={to}{...props}>{children}</Link>
    </li>
  )
}

export default Header

const Container = styled.div`
  width: 100%;
  height: 6.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 10;
  background-color: white;

  .upper {
    height: 5rem;
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

    p {
      margin: 0;
    }

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
      }
      .home:hover{
        cursor: pointer;
        text-decoration :underline;
      }

      .scheme :hover {
        cursor: pointer;
        text-decoration: underline;
      }
      .prediction :hover{
        cursor: pointer;
        text-decoration: underline;
      }
      .news :hover {
        cursor: pointer;
        text-decoration: underline;
      }
      .forecast :hover{
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

`

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
    width: 3rem;
    display: flex;
    justify-content: start;
    align-items: center;

    img {
      height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
      
    }
  }

  .text {
    height: 100%;
    display: flex;
    align-items: center;
    flex: 1;
    
    p {
      margin-left: 1rem;
      font-weight: 600;
      font-size: 32px;
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
  /* background-color: gray; */
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;

  .login-button {
    height: 50%;
    width: 6rem;
    background-color: black;
    border-radius: 40px;
    cursor: pointer;
    transition: opacity 0.15s;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      opacity: 0.8;
    }

    display: flex;
    justify-content: center;
    align-items: center; 

    p {
      color: white;
    }
  }
`


