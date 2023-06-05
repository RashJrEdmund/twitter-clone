"use client";

import styled from "@emotion/styled";

export const StyledFooter = styled.div`
  background-color: #1d9bf0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;

  .center_div {
    width: min(1224px, 90vw);
    min-height: 80px;
    gap: 300px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 50px;

    .footer_btns {
      width: fit-content;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      gap: 20px;
    }
  }

  @media only screen and (max-width: 1000px) {
    .center_div {
      gap: 17px;
      justify-content: space-between;
    }
  }

  @media only screen and (max-width: 700px) {
    .center_div {
      gap: unset;
      padding: 0 15px;

      .footer_text {
        display: none;
      }

      .footer_btns {
        width: 100%;
        gap: 20px;
        padding: 0 10px 0;
      }
    }
  }
`;
