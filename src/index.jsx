import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./styles/globals.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import {BrowserRouter} from "react-router";



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
             <App/>
      </BrowserRouter>
  </StrictMode>,
)
