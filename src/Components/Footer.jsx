import React from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@material-ui/core";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Container>
      <div className="up">
        <div className="contribuiter_profile">
          <h4>Dilip</h4>
          <p>KIIT 3rd year</p>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/dilip-vats-45a00221a/"
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://github.com/vats-dilip"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.instagram.com/vats_dilip/"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon />
          </IconButton>
        </div>
        <div className="contribuiter_profile">
          <h4>Saloni</h4>
          <p>KIIT 3rd year</p>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/saloni-thakur-1b88a91b9/"
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton component="a" href="" target="_blank" rel="noopener">
            <GitHubIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.instagram.com/saloni01thakur/"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon />
          </IconButton>
        </div>
        <div className="contribuiter_profile">
          <h4>Monsoon</h4>
          <p>KIIT 3rd year</p>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/monsoon-maurya-466036219/"
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://github.com/stark4192"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.instagram.com/himan_shu7310/"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon />
          </IconButton>
        </div>
        <div className="contribuiter_profile">
          <h4>Divyanshu</h4>
          <p>KIIT 3rd year</p>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/divyansu-kumar-sharma-18a9b8230/"
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://github.com/Divyansu-sharma"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.instagram.com/divyanshu.sharma.1048/"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon />
          </IconButton>
        </div>
      </div>

      <div className="down">
        Copyright © 2023 Agri Care. All rights reserved.
      </div>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  height: 30rem;
  width: 100%;
  background-color: #1c1b1b;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: poppins;

  .up {
    padding-right: 4rem;
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;

    .contribuiter_profile {
      background-color: rgb(248, 255, 245);
      margin-right: 20px;
      border-radius: 5px;

      h4 {
        font-family: poppins;
        padding-left: 11px;
        color: black;
      }

      p {
        font-family: poppins;
        color: black;
        padding-left: 10px;
      }
    }
  }

  .down {
    width: 100%;
    height: 3rem;
    padding-left: 2rem;
  }

  img {
    border-radius: 5px;
    width: 20%;
    height: 50%;
    object-fit: cover;
    margin-left: 10px;
  }
`;
