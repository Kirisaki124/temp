import React from "react";
import ReactDOM from "react-dom/client";
import TestLayout from "./TestLayout";
import "./style.css";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
    <React.StrictMode>
        <TestLayout />
    </React.StrictMode>
);
