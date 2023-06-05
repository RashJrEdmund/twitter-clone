"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

enum AnchorColor {
  twitterblue = "#198ad5",
  gray = "#808080",
}

interface AnchorTagProps {
  link?: AnchorColor | boolean;
  gray_link?: AnchorColor | boolean;
  align?: string;
  fill?: boolean;
  size?: string;
}

function creatHoverEffect(props: AnchorTagProps) {
  if (
    Object.keys(props).includes("link") ||
    Object.keys(props).includes("gray_link")
  ) {
    return css`
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    `;
  }
}

function generateColor({ link }: AnchorTagProps) {
  if (link) {
    return css`
      color: ${AnchorColor.twitterblue};
    `;
  } else
    return css`
      color: ${AnchorColor.gray};
    `;
}

const AnchorTag = styled.a<AnchorTagProps>`
  width: ${({ fill = false }) => (fill ? "100%" : "fit-content")};
  font-size: ${({ size = "14px" }) => size};
  margin: "5px 0";
  text-align: ${({ align = "unset" }) => align};
  ${generateColor}
  ${creatHoverEffect}
`;

export default AnchorTag;
