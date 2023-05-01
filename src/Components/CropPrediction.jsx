import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CropPrediction = () => {
  const [formData, setFormData] = useState({
    nitrogen_content: "",
    phosphorus_content: "",
    potassium_content: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [prediction, setPrediction] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseFloat(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/predict",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setPrediction(response.data.crop);
    } catch (error) {
      console.log("some error happened");
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="center-container">
        <div className="heading">
          <p>Crop Prediction</p>
        </div>
        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nitrogen_content">Nitrogen content (mg/kg):</label>
            <input
              type="number"
              id="nitrogen_content"
              name="nitrogen_content"
              value={formData.nitrogen_content}
              onChange={handleChange}
            />
            <label htmlFor="phosphorus_content">
              Phosphorus content (ppm):
            </label>
            <input
              type="number"
              id="phosphorus_content"
              name="phosphorus_content"
              value={formData.phosphorus_content}
              onChange={handleChange}
            />

            <label htmlFor="potassium_content">Potassium content (ppm):</label>
            <input
              type="number"
              id="potassium_content"
              name="potassium_content"
              value={formData.potassium_content}
              onChange={handleChange}
            />

            <label htmlFor="temperature">Temperature:</label>
            <input
              type="number"
              id="temperature"
              name="temperature"
              value={formData.temperature}
              onChange={handleChange}
            />

            <label htmlFor="humidity">Humidity:</label>
            <input
              type="number"
              id="humidity"
              name="humidity"
              value={formData.humidity}
              onChange={handleChange}
            />

            <label htmlFor="ph">pH:</label>
            <input
              type="number"
              id="ph"
              name="ph"
              value={formData.ph}
              onChange={handleChange}
            />

            <label htmlFor="rainfall">Rainfall:</label>
            <input
              type="number"
              id="rainfall"
              name="rainfall"
              value={formData.rainfall}
              onChange={handleChange}
            />

            <button type="submit">Predict Crop</button>
          </form>

          {prediction && (
            <div
              style={{
                backgroundColor: "darkgreen",
                color: "white",
                padding: "0",
                borderRadius: "3px",
                marginTop: "10px",
                fontSize: "13px",
                fontWeight: "500",
                width: "100%",
                height: "2.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  margin: "0",
                }}
              >
                Recommended Crop: {prediction}
              </p>
            </div>
          )}
        </FormWrapper>
      </div>
    </Container>
  );
};

export default CropPrediction;

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
    font-family: poppins;

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
  }
`;

const FormWrapper = styled.div`
  flex: 1;
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    // margin-top: 100px;
  }
  label {
    display: block;
    margin-bottom: 10px;
    color: darkgreen;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding-left: 8px;
    margin-bottom: 10px;
    font-family: poppins;
    border-radius: 3px;
    border: 1px solid gray;
    font-size: 12px;
    height: 2.5rem;
  }

  button {
    background-color: black;
    color: white;
    padding: 5px 8px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    margin-left: 150px;
    font-size: 12px;
    font-weight: 500;
    transition: opacity 0.15s;

    &:hvoer {
      opacity: 0.9;
    }

    &:active {
      opacity: 0.8;
    }
  }
`;
