import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App
      onSearch={function (inputValue: string): Promise<void> {
        throw new Error("Function not implemented.");
      }}
      images={[]}
    />
  </React.StrictMode>
);
