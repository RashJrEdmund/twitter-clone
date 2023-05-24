"use client";

import React from "react";
import {
  FooterHeader,
  FooterButtons,
  StyledPTag,
} from "../atoms/LoginRegistAtoms";

import { StyledFooter } from "../organisms/StyledFooter";

type Props = {};

export default function Footer({}: Props) {
  return (
    <StyledFooter>
      <div className="footer_text">
        <FooterHeader>Don&apos;t miss what&apos;s happening</FooterHeader>
        <StyledPTag>People on Twitter are the first to know</StyledPTag>
      </div>

      <div className="footer_btns">
        <FooterButtons>Log in</FooterButtons>
        <FooterButtons bg="#f5f5f5" color="#000">
          Sign up
        </FooterButtons>
      </div>
    </StyledFooter>
  );
}
