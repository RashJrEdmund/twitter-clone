"use client";

import styled from "@emotion/styled";

interface StyledProps {
  index?: string;
}

const StyledSingIn_Login = styled.div<StyledProps>`
  color: #000;

  .container {
    border-radius: 20px;
    padding: 20px 50px 100px;
    position: fixed;
    z-index: ${({ index = "2" }) => index};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #fff;
    gap: 15px;
    width: min(100vw, 650px);
    min-height: min(90vh, 600px);

    .policy_links {
      display: flex;
      flex-flow: wrap row;
      width: 100%;
      max-width: 360px;
      gap: 5px;
    }

    .sign_links {
      margin: 20px 0 0;
      width: 100%;
      max-width: 360px;
      display: flex;
      align-items: flex-start;
      gap: 5px;
    }
  }
`;

export default StyledSingIn_Login;
