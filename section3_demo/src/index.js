import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import books from "./books";
import EventBasic from "./EventBasic";
// import ForList from "./ForList";
import "./index.css";
import MyHello2 from "./MyHello";
import reportWebVitals from "./reportWebVitals";
import StateBasic from "./StateBasic";
// import ForNest from "./ForNest";
// import ForFilter from "./ForFilter";
import EventPoint from "./EventPoint";
import ForSort from "./ForSort";
import StateParent from "./StateParent";
import StyledPanel from "./StyledPanel";
import TitledPanel from "./TitledPanel";
import TitledPanel2 from "./TitledPanel2";
import EventKey from "./EventKey";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <ForList targets={ books } /> */}
    <ForSort src={books} />
    <EventBasic type="date" />
    <MyHello2 myName2="五十嵐真人" />
    <StateBasic init={0} />
    <StyledPanel>
      <p>こんにちは！</p>
      <b>こんにちは！</b>
    </StyledPanel>
    <TitledPanel title={<p>タイトル</p>} body={<b>こんにちは！！！！</b>} />
    <TitledPanel2>
      <p key="title">こんにちは！</p>
      <b key="body">どうもこんにちは！</b>
    </TitledPanel2>
    <StateParent />
    {/* <EventMouse alt="ロゴ画像" before={Logo} after={Next_logo} /> */}
    {/* <EventCompare /> */}
    <EventPoint />
    <EventKey />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
