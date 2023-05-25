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
  width: fit-content;
  font-size: 14px;
  margin: "5px 0";
  ${generateColor}
  ${creatHoverEffect}
`;


export default AnchorTag;
