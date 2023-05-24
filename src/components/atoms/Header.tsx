"use client"

import { css } from "@emotion/css";
import styled from "@emotion/styled";

enum HeaderColor {
  blue = "#00f",
  red = "#f00",
  default = "#f5f5f5",
}

enum HeaderSize {
  small,
  large,
}

interface StyledHeaderProps {
  color?: HeaderColor;
  size?: HeaderSize;
}

function generateColor({ color = HeaderColor.default }: StyledHeaderProps) {
  return `
        color: ${color}
    `;
}

function generateSize({ size }: StyledHeaderProps) {
  switch (size) {
    case HeaderSize.small:
      return css`
        padding: 2px;
        font-size: 10px;
      `;

    default:
      return css`
        padding: 20px;
        font-size: 14px;
      `;
  }
}

const StyledHeader = styled.h2<StyledHeaderProps>`
  font-size: 20px;
  font-weight: 800;
  width: 100%;
  ${generateColor}
  ${generateSize}
`;

export default StyledHeader;
