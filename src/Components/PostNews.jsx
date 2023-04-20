import React, { useState } from "react";
import styled from "styled-components";

function PostNews() {
  const [heading, setHeading] = useState("");
  const [article, setArticle] = useState("");
  const [creationTime, setCreationTime] = useState("");
  const [source, setSource] = useState("");
  const [sourceLink, setSourceLink] = useState("");
  const [imageLink, setImageLink] = useState("");

  const postNewsHandler = () => {
    console.log("clicked!");
  };

  return (
    <Container>
      <div className="news-heading">
        <input
          type="text"
          placeholder="Heading"
          required
          onChange={(event) => {
            setHeading(event.target.value);
          }}
        />
      </div>
      <div className="content">
        <textarea
          placeholder="Article. . ."
          required
          onChange={(event) => {
            setArticle(event.target.value);
          }}
        />
      </div>
      <div className="source-div">
        <div className="source">
          <input
            type="text"
            placeholder="Source"
            required
            onChange={(event) => {
              setSource(event.target.value);
            }}
          />
        </div>
        <div className="source-link">
          <input
            type="email"
            placeholder="Source Link"
            required
            onChange={(event) => {
              setSourceLink(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="line"></div>
      <div className="image-post">
        <div className="upload-image">Upload Image</div>
        <div className="post-btn" onClick={postNewsHandler}>
          <p>Post News</p>
        </div>
      </div>
    </Container>
  );
}

export default PostNews;

const Container = styled.form`
  margin-top: 2rem;
  width: 60%;
  height: 41rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: hidden;
  gap: 1.3rem;
  font-size: 15px;
  font-weight: 400;
  color: darkgreen;
  font-family: poppins;

  .news-heading {
    height: 4rem;
    width: 100%;

    input {
      width: 100%;
      height: 90%;
      padding-left: 10px;
      font-family: poppins;
      border-radius: 3px;
      border: 1px solid gray;
      font-weight: 600;
      outline-color: darkgreen;
    }
  }

  .content {
    flex: 1;
    width: 100%;
    background-color: blue;
    border-radius: 3px;
    overflow: hidden;

    textarea {
      width: 100%;
      height: 100%;
      padding: 10px;
      font-family: poppins;
      border-radius: 3px;
      font-size: 14px;
      outline-color: darkgreen;
    }
  }

  .source-div {
    margin-top: 5px;
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    .source {
      flex: 1.1;
      height: 100%;

      input {
        width: 100%;
        height: 90%;
        padding-left: 10px;
        font-family: poppins;
        border-radius: 3px;
        border: 1px solid gray;
        font-weight: 500;
        font-size: 14px;
        outline-color: darkgreen;
      }
    }

    .source-link {
      flex: 2;
      height: 100%;

      input {
        width: 100%;
        height: 90%;
        padding-left: 10px;
        padding-right: 10px;
        font-family: poppins;
        border-radius: 3px;
        border: 1px solid gray;
        font-weight: 400;
        font-size: 13px;
        outline-color: darkgreen;
      }
    }
  }

  .line {
    height: 1px;
    width: 100%;
    background-color: #bbb9b9ae;
    box-shadow: 0px 3px 6px -3px #d6d6d66b;
  }

  .image-post {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    gap: 1.1rem;
    font-size: 14px;

    .upload-image {
      flex: 1;
      height: 95%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      background-color: #1c1b1b;
      color: white;
      cursor: pointer;
      transition: opacity 0.25s;

      &:hover {
        opacity: 0.9;
      }

      &:active {
        opacity: 0.8;
      }
    }

    .post-btn {
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
`;
