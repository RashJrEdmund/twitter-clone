import React from "react";
import "./Pageloader.css";
import { StyledTwitterIcon } from "../atoms/LoginRegistAtoms";

export default function PageLoader() {
  return (
    <div id="root">
      <div className="loader-wrapper">
        <div className="loader1" />
        <p className="loader_title ">
          <StyledTwitterIcon size="50px" />
        </p>
      </div>
    </div>
  );
}
