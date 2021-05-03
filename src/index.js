import React from "react";
import ReactDom from "react-dom";

// JSX rules
// return single element
// div / section / article / or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting
// stateless functional component
// always return JSX

function Greeting() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement(
//     "h1",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
