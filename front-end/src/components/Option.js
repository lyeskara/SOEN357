import React from "react";
import "./Option.css";

function Option({ optionName, link }) {
  return (
    <button className={"Option"} href={link}>
      {optionName}
    </button>
  );
}

export default Option;
