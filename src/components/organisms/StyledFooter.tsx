"use client";

import styled from "@emotion/styled";


export const StyledFooter = styled.div`
  background-color: #1d9bf0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: fit-content;
  min-height: 100px;
  gap: 300px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .footer_btns {
    width: fit-content;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 20px;
    padding: 0 20px 0 0;
  }

  @media only screen and (max-width: 900px) {
    gap: 15vw;
  }

  @media only screen and (max-width: 650px) {
    gap: unset;

    .footer_text {
      display: none;
    }

    .footer_btns {
      width: 100%;
      gap: 20px;
      padding: 0 10px 0;
    }
  }
`;
