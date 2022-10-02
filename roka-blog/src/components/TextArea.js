import React, { useState } from "react";
//useSTate is a hook which helps us ti manage component state
export default function TextArea(props) {
  const [text, setText] = useState("");
  //here text is a state variable which can be modified by the function setText.Initial value
  //of text is "". You cannot update a state varial simple by assignment. you would
  //need to use the modifying function for this associated with concerning component.
  const handleUpChange = event => {
    setText(event.target.value); //event handling component will pass an event object used here
    //in this function which willset the state variable via modifying function to the event
    //handling component's value
  };
  function handleUpClick(event) {
    if (text.length === 0) {
      props.showAlert("Please enter something into the text area", "warning");
      return;
    }
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Capitalized!", "success");
  }
  function handleLowClick(event) {
    if (text.length === 0) {
      props.showAlert("Please enter something into the text area", "warning");
      return;
    }
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lower case!", "success");
  }
  function CamelFunction(str) {
    let x = str[0].toUpperCase();
    let xn = str.substr(1, str.length - 1).toLowerCase();
    return x + xn;
  }
  const handleCopy = event => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };
  function handleCamelClick(event) {
    if (text.length === 0) {
      props.showAlert("Please enter something into the text area", "warning");
      return;
    }
    let wordlist = text.split(" ");
    let final = wordlist.map(CamelFunction);
    let op = final.join(" ");
    setText(op);
    props.showAlert("Camel Casing on the go", "success");
  }
  const handleExtraSpaces = event => {
    if (text.length === 0) {
      props.showAlert("Please enter something into the text area", "warning");
      return;
    }
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed", "success");
  };
  const reset = () => {
    if (text.length === 0) {
      props.showAlert("Please enter something into the text area", "warning");
      return;
    }
    setText("");
    props.showAlert("Reset done!", "success");
  };
  return (
    <>
      <div className="container my-3">
        <div className="conatiner">
          <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
            {props.title}
          </h1>
          <div className="mb-3">
            <span
              className="input-group-text"
              style={{
                color: props.mode === "light" ? "black" : "white",
                backgroundColor: props.mode === "light" ? "#e0e0d0" : "#212529",
                border: "none",
                borderRadius: "5px 5px 0px 0px"
              }}
            >
              {props.sideTitle}
            </span>
            <textarea
              className="form-control"
              id="myBox"
              rows="6"
              aria-label="With textarea"
              value={text}
              //value entered in the text area is given by state variable
              onChange={handleUpChange}
              style={{
                color: props.mode === "light" ? "black" : "white",
                backgroundColor: props.mode === "light" ? "#f8f9fa" : "#656b70",
                border: props.mode === "light" ? "solid #e0e0d0 .5px" : "none",
                borderRadius: "0px 0px 5px 5px"
              }}
            ></textarea>
          </div>
          <button className="btn btn-primary my-1" onClick={handleUpClick}>
            Capitalize
          </button>
          <button
            className="btn btn-success mx-3 my-1"
            onClick={handleCamelClick}
          >
            Camel Casing
          </button>
          <button className="btn btn-warning my-1" onClick={handleLowClick}>
            Lower Casing
          </button>
          <button className="btn btn-primary mx-3 my-1" onClick={handleCopy}>
            Copy
          </button>
          <button className="btn btn-primary my-1" onClick={handleExtraSpaces}>
            Remove extra Spaces
          </button>
          <button className="btn btn-danger mx-3 my-1" onClick={reset}>
            Reset
          </button>
        </div>
        <div
          className="container"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          <h3 className="my-3">Text Summary</h3>
          <p>{text.length} number of Characters</p>
          <p>{text === "" ? 0 : text.split(" ").length} number of words</p>
          <p>
            {(0.008 * text.split("").length).toFixed(2)} minutes taken to read
          </p>
        </div>
      </div>
    </>
  );
}
