"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledHeader = styled.h2`
  color: ${({ color = "#f5f5f5" }) => color};
  font-size: 20px;
  font-weight: 800;
  width: 100%;
`;

export const FooterHeader = styled.h2`
  color: ${({ color = "#f5f5f5" }) => color};
  font-size: 22px;
  font-weight: 800;
  width: 100%;
  white-space: nowrap;
`;

export const FooterButtons = styled.button`
  background: ${({ bg = "none" }) => bg};
  color: ${({ color = "#fff" }) => color};
  width: fit-content;
  white-space: nowrap;
  border: 1px solid #f5f5f599;
  border-radius: 20px;
  font-weight: 600;
  padding: 5px 20px;
  cursor: pointer;
  transition: 0.3s opacity;

  &:hover {
    opacity: 0.7;
  }

  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const StyledLinkTag = styled.h5`
  color: #808080;
  width: fit-content;

  ${({ link }) =>
    link &&
    css`
      color: #198ad5;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    `}
`;

export const StyledPTag = styled.p`
  color: #fff;
  width: fit-content;
`;
