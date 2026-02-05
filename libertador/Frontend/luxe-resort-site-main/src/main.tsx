import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';


createRoot(document.getElementById("root")!).render(<App />);
