import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import books from "./books";
import EventBasic from "./EventBasic";
import ForList from "./ForList";
import "./index.css";
import MyHello2 from "./MyHello";
import reportWebVitals from "./reportWebVitals";
import StateBasic from "./StateBasic";
import ForNest from "./ForNest";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <ForList targets={ books } /> */}
    <ForNest array={ books } />
    <EventBasic type="date" />
    <MyHello2 myName2="五十嵐真人" />
    <StateBasic init={0} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
