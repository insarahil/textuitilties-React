import React, { useState } from "react";

export default function Text(props) {
  const [text, settext] = useState("Enter The Text");

  const handleOnChange = (event) => {
    settext(event.target.value);
  };

  const convertupperCase = () => {
    settext(text.toUpperCase());
  };

  const convertlowerCase = () => {
    settext(text.toLocaleLowerCase());
  };
  return (
    <div>
      <div
        className="mb-3 container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="text-start">Enter The Text</h1>
        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "#5E5E5E" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          className="form-control"
          value={text}
          onChange={handleOnChange}
          rows="8"
        >
          Enter The Text
        </textarea>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "primary" : "success"
          } m-3`}
          onClick={convertupperCase}
        >
          UpperCase
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? "primary" : "success"
          } m-3`}
          onClick={convertlowerCase}
        >
          LowerCase
        </button>
        <p className="text-start">
          Total words are: {text.split(" ").length} and total crachters are:{" "}
          {text.length}
        </p>
        <h1 className="text-start"> Your Text</h1>
        <p className="text-start">{text}</p>
      </div>
    </div>
  );
}
