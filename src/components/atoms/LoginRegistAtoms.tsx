"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { FaTwitter, FaApple } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";

interface StyledProps {
  color?: string;
  padd?: string;
  bg?: string;
  fill?: boolean;
  weight?: string | number;
  size?: string;
  index?: string;
  margin?: string;
  loading?: boolean;
  error?: boolean;
  align?: string;
  maxW?: boolean | string;
}

export const StyledHeader = styled.h2<StyledProps>`
  color: ${({ color = "#f5f5f5" }) => color};
  font-size: ${({ size = "20px" }) => size};
  font-weight: ${({ weight = "600" }) => weight};
  width: 100%;
  margin: ${({ margin = "unset" }) => margin};
  text-align: ${({ align = "unset" }) => align};
`;

export const FooterHeader = styled.h2<StyledProps>`
  color: ${({ color = "#f5f5f5" }) => color};
  font-size: 22px;
  font-weight: ${({ weight = "800" }) => weight};
  width: 100%;
  white-space: nowrap;
`;

export const SignInput = styled.input<StyledProps>`
  background: ${({ bg = "#fff" }) => bg};
  color: ${({ color = "#000" }) => color};
  width: 100%;
  height: 60px;
  border: ${({ error }) => (error ? "1px solid red" : "1px solid #80808054")};
  border-radius: 4px;
  padding: 10px;
  transition: 0.3s opacity;
  max-width: ${({ maxW = false }) => maxW || css`var(--Styled-btn-max-width)`};
`;

export const StyledPTag = styled.p<StyledProps>`
  color: #fff;
  width: fit-content;
`;

export const Overlay = styled.div<StyledProps>`
  background-color: #00000089;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${({ index = "51" }) => index};
`;

/* THIS SECTIONS IS FOR ICON */

export const StyledTwitterIcon = styled(FaTwitter)<StyledProps>`
  color: #198ad5;
  font-size: ${({ size = "37px" }) => size};
  margin: 0 0 20px;

  animation: ${({ loading }) => (loading ? "LoadingAnime" : "unset")};
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes LoadingAnime {
    0% {
      color: #198ad5;
    }
    50% {
      color: #198ad588;
    }
    100% {
      color: #198ad5dd;
    }
  }
`;

export const CancelBtn = styled(RxCross1)<StyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
  border: 1px solid transparent;
  color: ${({ color = "#000" }) => color};
  font-size: ${({ size = "35px" }) => size};
  border-radius: 100%;
  padding: 7px;
  cursor: pointer;

  &:hover {
    background-color: #00000022;
  }
`;

export const StyledGoogle = styled(FcGoogle)<StyledProps>`
  font-size: 25px;
  padding: 0;
  margin: 0;
`;

export const StyledApple = styled(FaApple)<StyledProps>`
  font-size: 25px;
  padding: 0;
  margin: 0;
`;
