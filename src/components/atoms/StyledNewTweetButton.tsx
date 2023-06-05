"use client";

import styled from "@emotion/styled";


const NewTweetButton = styled.button`
  background-color: lightblue;
  width: 80px;
  height: 50px;
  position: fixed;
  z-index: 1000;
  bottom: 50px;
  right: 50px;


  &:hover {
    background-color: lightblue;
  }

  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;

export default NewTweetButton;