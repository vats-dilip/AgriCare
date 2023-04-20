import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

function Apply({ schemes }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [scheme, setScheme] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, sePhoneNumber] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const filteredSchemes = schemes.filter((currentScheme) => {
      return currentScheme._id === id;
    });
    setScheme(filteredSchemes[0]);
  }, [schemes, id]);

  const goBackHandler = () => {
    navigate("/scheme");
  };

  console.log(name);
  console.log(email);
  console.log(phoneNumber);
  console.log(aadharNumber);
  console.log(address);

  return (
    <Container>
      <div className="back-div">
        <div className="back-btn" onClick={goBackHandler}>
          <img src="/images/left-arrow.png" />
        </div>
      </div>
      <div className="form-div">
        <div className="name">
          <input
            type="text"
            placeholder="Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="phone-email">
          <div className="phone">
            <input
              type="text"
              placeholder="Mobile No."
              onChange={(event) => {
                sePhoneNumber(event.target.value);
              }}
            />
          </div>
          <div className="email">
            <input
              type="email"
              placeholder="Email Id"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="aadhar">
          <input
            type="text"
            placeholder="Aadhar No."
            onChange={(event) => {
              setAadharNumber(event.target.value);
            }}
          />
        </div>
        <div className="address">
          <textarea
            placeholder="Adddress"
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </div>
        <div className="btn-scheme">
          <div className="scheme-div">
            <p>Registring for scheme {id}</p>
          </div>
          <div className="register-btn">
            <p>Register</p>
          </div>
        </div>
      </div>
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
  align-items: center;
  gap: 1rem;

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
    margin-top: 2rem;
    flex: 1;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1.3rem;
    font-size: 15px;
    font-weight: 400;
    color: darkgreen;

    .name,
    .aadhar {
      width: 100%;
      height: 4rem;

      input {
        width: 100%;
        height: 90%;
        padding-left: 10px;
        font-family: poppins;
        border-radius: 3px;
        border: 1px solid gray;
      }
    }

    .phone-email {
      width: 100%;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.1rem;

      .phone,
      .email {
        flex: 1;
        height: 100%;

        input {
          width: 100%;
          height: 90%;
          padding-left: 10px;
          font-family: poppins;
          border-radius: 3px;
          border: 1px solid gray;
        }
      }
    }

    .address {
      width: 100%;
      height: 9rem;

      textarea {
        width: 100%;
        height: 100%;
        padding: 10px;
        font-family: poppins;
        border-radius: 3px;
      }
    }

    .btn-scheme {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 4rem;
      gap: 1.1rem;
      font-size: 14px;

      .scheme-div {
        flex: 1;
        height: 95%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        background-color: #1c1b1b;

        p {
          margin: 0;
          font-family: poppins;
          color: white;
        }
      }

      .register-btn {
        flex: 1;
        height: 95%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: darkgreen;
        cursor: pointer;
        border-radius: 3px;
        transition: opacity 0.25s;

        &:hover {
          opacity: 0.9;
        }

        &:active {
          opacity: 0.8;
        }

        p {
          margin: 0;
          font-family: poppins;
          color: white;
        }
      }
    }
  }
`;
