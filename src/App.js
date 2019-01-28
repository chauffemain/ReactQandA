import React from "react";
import Joke from "./components/Joke";

const App = () => (
  <div>
    <Joke
      control={{
        answer: "One is never satisfied, unless he is"
      }}
    />
    <Joke
      control={{
        question: "who has the cutest smile",
        answer: "sammy"
      }}
    />
    <Joke
      control={{
        question: "who has the nicest buttons",
        answer: "sara"
      }}
    />
    <Joke
      control={{
        question: "who as the nicest shape",
        answer: "hugs"
      }}
    />
    <Joke
      control={{
        question: "who is the naughtiest",
        answer: "sara"
      }}
    />
    <Joke
      control={{
        question: "who is the most aggresive",
        answer: "stoya"
      }}
    />
  </div>
);

export default App;
