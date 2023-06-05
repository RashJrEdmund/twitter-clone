"use client";

import styled from "@emotion/styled";

interface StyledProps {
  index?: string;
}

const StyledSingIn_Login = styled.dialog<StyledProps>`
  color: #000;

  .container {
    border-radius: 20px;
    padding: 20px 50px 100px;
    position: fixed;
    z-index: ${({ index = "53" }) => index};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #fff;
    gap: 15px;
    width: min(100vw, 590px);
    min-height: min(90vh, 600px);
    overflow: auto;

    .policy_links {
      display: flex;
      flex-flow: wrap row;
      width: 100%;
      max-width: var(--Styled-btn-max-width);
      gap: 5px;
    }

    .sign_links {
      margin: 20px 0 0;
      width: 100%;
      max-width: var(--Styled-btn-max-width);
      display: flex;
      align-items: flex-start;
      gap: 5px;
    }

    .complete_paragraph {
      width: 100%;
      height: fit-content;
      text-align: left;
      margin: 2rem 0 0;
    }
  }

  @media only screen and (max-width: 702px) {
    .container {
      border-radius: 0;
      /* left: 0;
      top: 0;
      transform: unset; */
      width: 100vw;
      min-height: 100vh;
      margin: 0;
      justify-content: center;
    }
  }
`;

export default StyledSingIn_Login;
