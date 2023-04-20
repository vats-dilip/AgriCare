import React, { useState, useRef } from "react";
import styled from "styled-components";
import * as filestack from "filestack-js";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import date from "date-and-time";
import "react-toastify/dist/ReactToastify.css";

function PostNews() {
  const [heading, setHeading] = useState("");
  const [article, setArticle] = useState("");
  const [source, setSource] = useState("");
  const [sourceLink, setSourceLink] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [isUploding, setIsUploading] = useState(false);

  const fileInputRef = useRef(null);

  const client = filestack.init("APcL5FoBJQqWnTqV8VGQSz");

  const uploadImageHandler = () => {
    fileInputRef.current.click();
  };

  const uploadImageOnChange = (event) => {
    setIsUploading(true);
    const fileInput = document.getElementById("image-upload");
    const files = fileInput.files[0];

    // upload image to filestack and get back the image url
    client
      .upload(files)
      .then((response) => {
        if (response.url != "") {
          setIsUploading(false);
          setImageLink(response.url);
          toast.success("Image Uploaded", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setIsUploading(false);
        toast.error("Failed to upload image!", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  const postNewsHandler = async () => {
    let pattern = date.compile("MMM D YYYY h:m:s A");
    let creationTime = date.format(new Date(), pattern);

    let news = {
      newsHeading: heading,
      newsArticle: article,
      createdAt: creationTime,
      newsSource: source,
      newsSourceLink: sourceLink,
      imageLink: imageLink,
    };

    console.log("news is : ", news);

    try {
      await fetch("http://localhost:8080/postNews", {
        method: "POST",
        body: JSON.stringify(news),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          toast.success("News Posted!", {
            position: toast.POSITION.TOP_CENTER,
          });
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error("Failed to post News!", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    } catch (error) {
      console.log("failed to register user");
      toast.error("Failed to post News!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
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
        <div className="upload-image" onClick={uploadImageHandler}>
          <input
            type="file"
            ref={fileInputRef}
            onChange={uploadImageOnChange}
            id="image-upload"
          />
          {!isUploding && (
            <p
              style={{
                marginTop: "11px",
              }}
            >
              Upload Image
            </p>
          )}
          {isUploding && <ClipLoader color="#ffffff" size={16} />}
        </div>
        <div className="post-btn" onClick={postNewsHandler}>
          <p>Post News</p>
        </div>
      </div>
      <ToastContainer autoClose={1000} hideProgressBar={true} />
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

      input {
        visibility: hidden;
        width: 0;
        height: 0;
      }

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
