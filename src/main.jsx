import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import App from "./App.jsx";
import { TasksProvider } from "./context/tasks.provider.jsx";

createRoot(document.getElementById("root")).render(
  <TasksProvider>
    <App />
  </TasksProvider>
);
