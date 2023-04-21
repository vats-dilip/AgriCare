import React from "react";
import styled from "styled-components";

function NewsCard({
  heading,
  article,
  createdAt,
  imageLink,
  sourceName,
  sourceLink,
}) {
  return (
    <Container>
      <div className="left">
        <img src={imageLink} />
      </div>
      <div className="right">
        <div className="newsHeading">
          <p>{heading}</p>
        </div>
        <div className="dateTime">
          <p>{createdAt}</p>
        </div>
        <div className="article">
          <p>{article}</p>
        </div>
        <div className="source">
          <p>
            read more at{" "}
            <a href={sourceLink} target="_blank">
              {sourceName}
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default NewsCard;

const Container = styled.div`
  width: 100rem;
  height: 25rem;
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
    width: 28rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      border-radius: 6px;
    }
  }

  .right {
    flex: 1;
    height: 100%;
    padding-right: 12px;
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 0.5rem;

    .newsHeading {
      width: 100%;
      flex: 1;
      display: flex;
      justify-content: start;
      align-items: start;
      p {
        margin: 0;
        font-size: 18px;
        font-weight: 500;
        color: darkgreen;
      }
    }

    .dateTime {
      margin-top: -2px;
      width: 100%;
      height: 2rem;
      display: flex;
      justify-content: start;
      align-items: start;
      p {
        margin: 0;
        font-size: 12px;
        color: black;
      }
    }

    .article {
      flex: 4.5;

      display: flex;
      justify-content: start;
      align-items: start;
      p {
        margin: 0;
        color: black;
        font-weight: 300;
        text-justify: inter-word;
      }
    }

    .source {
      width: 100%;

      p {
        margin: 0;
        font-size: 13px;
        a {
          cursor: pointer;
          color: darkgreen;
        }
      }
    }
  }
`;
