import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <App />
  </React.StrictMode>
);
