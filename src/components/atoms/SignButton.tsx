"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface StyledProps {
  color?: string;
  padd?: string;
  margin?: string;
  bg?: string;
  borderColor?: string;
  fill?: boolean;
  weight?: string | number;
  maxW?: boolean | string;
  maxScreenQuery?: string;
}

const SignButton = styled.button<StyledProps>`
  background: ${({ bg = "#fff" }) => bg};
  color: ${({ color = "#000" }) => color};
  width: ${({ fill = false }) => (fill ? "100%" : "fit-content")};
  white-space: nowrap;
  border: ${({ borderColor = "#80808044" }) => `1px solid ${borderColor}`};
  border-radius: 20px;
  font-weight: ${({ weight = "600" }) => weight};
  padding: ${({ padd = "5px 20px" }) => padd};
  margin: ${({ margin = "unset" }) => margin};
  cursor: pointer;
  transition: 0.3s opacity;
  max-width: ${({ maxW = false }) => maxW || css`var(--Styled-btn-max-width)`};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    background: ${({ bg = "#fff" }) => {
      return bg === "#fff" ? "#ffffff11" : "#000000dd";
    }};
  }

  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const ExtendedSignButton = styled(SignButton)`
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export default SignButton;
