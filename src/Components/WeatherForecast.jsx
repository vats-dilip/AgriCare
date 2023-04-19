import React, { useEffect, useState } from "react";
import styled from "styled-components";

const WeatherForecast = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `
      https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ccd3999509fce601691d7949baceb89d`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <Container className="box">
        <h1>Current Weather</h1>
        <div className="inputdata">
          <input
            type="search"
            className="inputfield"
            placeholder="enter city"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p>no data available</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">{search}</h2>
              <h2 className="temp">temperature : {city.temp}°C</h2>
              <h2>feels like : {city.feels_like}°C</h2>
              <h2>humidity : {city.humidity}</h2>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default WeatherForecast;

const Container = styled.div`
  width: 500px;
  align-items: center;
  padding: 1.5rem;
  box-shadow: 0 0 2px;
  margin: 1rem 0;
  border-radius: 8px;
  margin-left: 250px;
  margin-right: 250px;

  .info {
    .location {
      font-family: roboto;
      text-transform: capitalize;
    }

    .temp {
      font-family: roboto;
      text-transform: capitalize;
    }

    h2 {
      font-family: roboto;
      text-transform: capitalize;
    }
  }
`;
