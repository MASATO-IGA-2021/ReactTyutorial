import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FormCheck from "./FormCheck";
import FormCheckMulti from "./FormCheckMulti";
import FormList from "./FormList";
import FormRadio from "./FormRadio";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import StateForm from "./StateForm";
import StateFormUC from "./StateFormUC";
import StateNestImmer2 from "./StateImmer2";
import StateNest from "./StateNest";
import StateNestImmer from "./StateNestImmer";
import StateTodo from "./StateTodo";
import FormBasic from "./FormBasic";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <StateForm />
    <StateFormUC />
    <FormTextarea />
    <FormSelect />
    <FormList />
    <FormRadio />
    <FormCheck />
    <FormCheckMulti />
    <StateNest />
    <StateNestImmer />
    <StateNestImmer2 />
    <StateTodo />
    <FormBasic />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
