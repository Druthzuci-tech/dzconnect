import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./lib/fontawesome"; // Import FontAwesome icons

createRoot(document.getElementById("root")!).render(<App />);
