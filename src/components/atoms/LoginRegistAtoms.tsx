"use client";

import styled from "@emotion/styled";

import { FaTwitter } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

interface StyledProps {
  color?: string;
  padd?: string;
  bg?: string;
  fill?: boolean;
  weight?: string | number;
  size?: string;
  index?: string;
  margin?: string;
}

export const StyledHeader = styled.h2<StyledProps>`
  color: ${({ color = "#f5f5f5" }) => color};
  font-size: ${({ size = "20px" }) => size};
  font-weight: ${({ weight = "600" }) => weight};
  width: 100%;
  margin: ${({ margin = "unset" }) => margin};
`;

export const FooterHeader = styled.h2<StyledProps>`
  color: ${({ color = "#f5f5f5" }) => color};
  font-size: 22px;
  font-weight: ${({ weight = "800" }) => weight};
  width: 100%;
  white-space: nowrap;
`;

export const SignButtons = styled.button<StyledProps>`
  background: ${({ bg = "#fff" }) => bg};
  color: ${({ color = "#000" }) => color};
  width: ${({ fill = false }) => (fill ? "100%" : "fit-content")};
  white-space: nowrap;
  border: 1px solid #80808054;
  border-radius: 20px;
  font-weight: ${({ weight = "600" }) => weight};
  padding: ${({ padd = "5px 20px" }) => padd};
  cursor: pointer;
  transition: 0.3s opacity;
  max-width: var(--Styled-btn-max-width);

  &:hover {
    background: ${({ bg = "#fff" }) => {
      return bg === "#fff" ? "#00000011" : "#000000d1";
    }};
  }

  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const SignInput = styled.input<StyledProps>`
  background: ${({ bg = "#fff" }) => bg};
  color: ${({ color = "#000" }) => color};
  width: 100%;
  height: 60px;
  border: 1px solid #80808054;
  border-radius: 4px;
  padding: 10px;
  transition: 0.3s opacity;
  max-width:var(--Styled-btn-max-width);
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
  z-index: ${({ index = "2" }) => index};
`;

export const StyledTwitterIcon = styled(FaTwitter)<StyledProps>`
  color: #198ad5;
  font-size: ${({ size = "37px" }) => size};
  margin: 0 0 20px;
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
