import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./styles/globals.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import {BrowserRouter} from "react-router";
import {Provider} from "react-redux";
import {store} from "./store/store.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <App/>
          </Provider>
      </BrowserRouter>
  </StrictMode>
)
