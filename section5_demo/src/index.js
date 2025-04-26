import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProfilerBasic from './ProfilerBasic';
import StyledBasic from './StyledBasic';
import StyledCss from './StyledCss';
import StyledDynamic from './StyledDynamic';
import { MyStyledButton, MyButton } from './StyledComponent2';
import StyledCommon from './StyledCommon';
import StyledGlobal from './StyledGlobal';
import EmotionJsx from './EmotionJSX';
import PortalBasic from './PotalBasic';
import ErrorRoot from './ErrorRoot';
import ErrorRetryRoot from './ErrorRetryRoot';
import ErrorEventRoot from './ErrorEventRoot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div id='dialog'></div>
    <App />
    <ProfilerBasic />
    {/* <StyledCss /> */}
    {/* <StyledDynamic theme={{
      radius: false,
      color: 'Yellow'
    }}/> */}
    {/* <StyledComponent /> */}
    <MyButton >ボタン</MyButton>
    <MyStyledButton>ボタン</MyStyledButton>
    <StyledGlobal />
    <StyledCommon />
    <EmotionJsx />
    <PortalBasic />
    {/* <ErrorRoot /> */}
    {/* <ErrorRetryRoot /> */}
    <ErrorEventRoot />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
