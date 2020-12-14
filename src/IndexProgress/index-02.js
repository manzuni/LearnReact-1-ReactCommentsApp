// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a React Component
const Component = function () {
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

// Take the React Component and show it on the screen
ReactDOM.render(<Component />, document.querySelector("#root"));
