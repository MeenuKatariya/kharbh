import React from "react";
import ReactDOMClient from "react-dom/client";
import { WebsiteOlpRevised } from "./screens/WebsiteOlpRevised";

const app = document.getElementById("root");
const root = ReactDOMClient.createRoot(app);
root.render(<WebsiteOlpRevised />);
