import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./Loading.css";
import reportWebVitals from "./reportWebVitals";
import ReactLoading from "react-loading";
const App = lazy(() => import("./App"));

const Loading = () => {
  const [changeDisplay, setChangeDisplay] = useState(false);
  if (!changeDisplay)
    return (
      <div className="loading-app">
        <button
          className="visit-button"
          onClick={() => setTimeout(setChangeDisplay, 200, true)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <p className="visit-text">VISIT</p>
        </button>
      </div>
    );
  return (
    <div className="loading-app">
      <Suspense
        fallback={
          <ReactLoading type="bars" color="#f5f5f5" className="react-loading" />
        }
      >
        <App />
      </Suspense>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Loading />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
