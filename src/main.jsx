import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SpinningWheel from "./SpinningWheel.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SpinningWheel />
  </StrictMode>
);
