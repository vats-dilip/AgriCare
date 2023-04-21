import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";
import PostNews from "./PostNews";
import NewsCard from "./NewsCard";

function News() {
  const [isAdmin] = useContext(AuthContext);
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    await fetch("http://localhost:8080/getAllNews")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setNews(data);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const cards = news
    ? news.map((card) => {
        return (
          <NewsCard
            heading={card.newsHeading}
            article={card.newsArticle}
            createdAt={card.createdAt}
            imageLink={card.imageLink}
            sourceName={card.newsSource}
            sourceLink={card.newsSourceLink}
          />
        );
      })
    : null;

  return (
    <Container>
      <div className="center-container">
        <div className="heading">
          <p>News</p>
        </div>
        <div className="news-container">
          {isAdmin && <PostNews />}
          {!isAdmin && cards}
        </div>
      </div>
    </Container>
  );
}

export default News;

const Container = styled.div`
  min-height: 100vh;
  height: auto;
  padding-top: 9.3rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: start;
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

  .news-container {
     /* background-color: blue; */
     flex: 1;
      width: 101rem;
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;
      gap: 2.5rem;
  }
`;
