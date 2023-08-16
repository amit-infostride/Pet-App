import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ReactDOM.createRoot(<App />, document.getElementById("root"));
const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <App />
);
reportWebVitals();
