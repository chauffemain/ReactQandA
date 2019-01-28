import React from "react";

const Joke = props => (
  <div>
    <h3 style={{ display: props.control.question ? "block" : "none" }}>
      Question: {props.control.question}
    </h3>
    <h3>Answer: {props.control.answer}</h3>
  </div>
);

export default Joke;
