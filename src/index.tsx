import React, { useState } from "react";
import { createRoot } from "react-dom/client";
// import App
import { App } from "./app/app";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<App />);
}
