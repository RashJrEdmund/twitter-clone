"use client";

import styled from "@emotion/styled";

interface StyledProps {
    color?: string;
    padd?: string;
    bg?: string;
    fill?: boolean;
}

export const StyledHeader = styled.h2<StyledProps>`
  color: ${({ color = "#f5f5f5" }) => color};
  font-size: 20px;
  font-weight: 800;
  width: 100%;
`;

export const FooterHeader = styled.h2<StyledProps>`
  color: ${({ color = "#f5f5f5" }) => color};
  font-size: 22px;
  font-weight: 800;
  width: 100%;
  white-space: nowrap;
`;

export const SignButtons = styled.button<StyledProps>`
  background: ${({ bg = "#fff" }) => bg};
  color: ${({ color = "#000" }) => color};
  width: ${({ fill = false }) => (fill ? "100%" : "fit-content")};
  white-space: nowrap;
  border: 1px solid #f5f5f599;
  border-radius: 20px;
  font-weight: 600;
  padding: ${({ padd = "5px 20px" }) => padd};
  cursor: pointer;
  transition: 0.3s opacity;

  &:hover {
    opacity: 0.7;
  }

  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const StyledPTag = styled.p<StyledProps>`
  color: #fff;
  width: fit-content;
`;
