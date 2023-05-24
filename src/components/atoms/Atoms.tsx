"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

type Props = {
  text: string;
  color?: string;
  link?: string;
  icon?: Element;
};

function HeaderTag({ text, color }: Props) {
  const StyledHeader = styled.h2`
    color: ${color || "#f5f5f5"};
    font-size: 20px;
    font-weigth: 800;
    width: 100%;
  `;

  return <StyledHeader>{text}</StyledHeader>;
}

 function LinkTag({ text, link }: Props) {
  const StyledLinkTag = styled.h5`
    color: #808080;
    width: fit-content;

    ${() =>
      link &&
      css`
        color: #198ad5;

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      `}
  `;

  const navigate = () => link && window.open(link);

  return <StyledLinkTag onClick={navigate}>{text}</StyledLinkTag>;
}

function PTag({ text }: Props) {
  const StyledLinkTag = styled.p`
    color: #fff;
    width: fit-content;
  `;

  return <StyledLinkTag>{text}</StyledLinkTag>;
}

export {
    HeaderTag,
    LinkTag,
    PTag
}
