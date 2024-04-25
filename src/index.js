import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Navbar from "./Navbar";
import Quizz from "./Quizz";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Navbar />
    <Quizz />
  </StrictMode>,
);
