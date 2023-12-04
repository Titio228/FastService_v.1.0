import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export default function Button({
  labelButton = "Test",
  design = "blue",
  path = "/",
  btnContainer = "container-btn-xs",
}) {
  return (
    <div className={btnContainer}>
      <Link to={path} className={design}>
        {labelButton}
      </Link>
    </div>
  );
}
