import * as React from "react";
import "./InputSitterOption.css";

const InputSitterOption = ({ imageOff, imageOn, title, color, status }) => {
  return (
    <div className="Sitter__inputOption">
      <div style={{ color: color }} />

      {!status ? (
        <div>
          <h5 className="Sitter__crossOff">{title}</h5>
          <img className="Sitter__inputImg" src={imageOff} alt={title} />
        </div>
      ) : (
        <div>
          <h5>{title}</h5>
          <img className="Sitter__inputImg" src={imageOn} alt={title} />
        </div>
      )}
    </div>
  );
};

export default InputSitterOption;
