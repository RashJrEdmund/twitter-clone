"use client";

import styled from "@emotion/styled";

const StyledSignWidget = styled.div`
  width: fit-content;
  max-width: min(370px, 100%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 1rem 0 0 min(1.3vw, 2rem);
  position: sticky;
  top: 0;

  .inner_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 10px 15px;
    width: 100%;
    border: 1px solid #00000022;
    border-radius: 10px;
  }

  .gray_links {
    padding: 0 15px 10px;
    display: flex;
    flex-flow: row wrap;
    column-gap: 15px;
  }

  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

export default StyledSignWidget;
