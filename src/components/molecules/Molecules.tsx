"use client";

import styled from "@emotion/styled";

export const StrikedText = styled.p`
  width: min(100%, var(--Styled-btn-max-width));
  font-size: 16px;
  margin: "5px 0";
  color: #808080;
  text-decoration: solid #000;
  display: flex;
  align-items: center;
  gap: 10px;

  hr {
    width: 100%;
    border: none;
    border-bottom: 1px solid #808080;
  }
`;
