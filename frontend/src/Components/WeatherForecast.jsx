
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const WeatherApp = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState("Bhubaneshwar");
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://apjoy-weather-forecast.p.rapidapi.com/forecast",
      params: { location: search, days: "14" },
      headers: {
        "X-RapidAPI-Key": "55b294e5a7mshbd944956f1f48bfp1e4dd1jsn4e984eb9dcb1",
        "X-RapidAPI-Host": "apjoy-weather-forecast.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setWeatherData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [search]);

  return (
    <>
      <Body>
        <Container>
          <Title>Weather Forecast</Title>
          <div className="inputdata">
            <InputField
              type="search"
              className="inputfield"
              placeholder="enter city"
              onChange={(event) => {
                setSearch(event.target.value.toUpperCase());
              }}
            />
          </div>
          {!weatherData ? (
            <p>no data available</p>
          ) : (
            <div>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginTop: "20px",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#488A0F" }}>
                    <th
                      style={{ padding: "10px", textAlign: "center" }}
                      colSpan="15"
                    >
                      Weather Forecast in {search}
                    </th>
                  </tr>
                  <tr style={{ backgroundColor: "#b5e7a0" }}>
                    <th style={{ padding: "10px" }}>Date/Time</th>
                    {weatherData.list.slice(0, 14).map((data, index) => (
                      <td key={index} style={{ padding: "10px" }}>
                        {" "}
                        {data.dt_txt}
                      </td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th style={{ padding: "10px", backgroundColor: "#d9ecd0" }}>
                      Temperature
                    </th>
                    {weatherData.list.slice(0, 14).map((data, index) => (
                      <td
                        key={index}
                        style={{ padding: "10px", backgroundColor: "#DAF5FF" }}
                      >
                        {data.main.temp}°C
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th
                      style={{ padding: "10px", backgroundColor: " #d9ecd0" }}
                    >
                      Feels Like
                    </th>
                    {weatherData.list.slice(0, 14).map((data, index) => (
                      <td
                        key={index}
                        style={{ padding: "10px", backgroundColor: "#DAF5FF" }}
                      >
                        {data.main.feels_like}°C
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th
                      style={{ padding: "10px", backgroundColor: " #d9ecd0" }}
                    >
                      Humidity
                    </th>
                    {weatherData.list.slice(0, 14).map((data, index) => (
                      <td
                        key={index}
                        style={{ padding: "10px", backgroundColor: "#DAF5FF" }}
                      >
                        {data.main.humidity}%
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th
                      style={{ padding: "10px", backgroundColor: " #d9ecd0" }}
                    >
                      Wind Speed
                    </th>
                    {weatherData.list.slice(0, 14).map((data, index) => (
                      <td
                        key={index}
                        style={{ padding: "10px", backgroundColor: "#DAF5FF" }}
                      >
                        {data.wind.speed}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </Container>
      </Body>
    </>
  );
};

const Body = styled.div`
  ${"" /* background-image: url(${forecast}); */}
  background-color: f8fff5#;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  box-sizing: border-box;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: #4a4a4a;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Location = styled.h2`
  font-size: 50px;
  margin-bottom: 10px;
`;

const Temp = styled.h2`
  font-size: 30px;
  margin-bottom: 5px;
`;
const Feels = styled.h2`
  font-size: 30px;
  margin-bottom: 5px;
`;
const Humidity = styled.h2`
  font-size: 30px;
  margin-bottom: 5px;
`;

export default WeatherApp;
