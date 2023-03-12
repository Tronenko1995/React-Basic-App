import React from "react";
// React 18
import ReactDOM from "react-dom/client";
// React 17
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { Header } from "./App";

// const text = "Hello World";

// const elem = <h2>Hello World</h2>;
// const elem = (
//   <div>
//     <h2>Текст: {text}</h2>
//     <input type="text" />
//     <button>123</button>
//   </div>
// );
// const elem = React.createElement(
//   "h2",
//   { className: "greetings" },
//   "Hello World"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(elem);

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// React 17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
