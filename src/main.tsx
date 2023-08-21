import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { LoadScript } from "@react-google-maps/api";

import App from "./App";
import store from "store/store.ts";
import ThemeProvider from "theme/ThemeProvider";

import { MAPS_API_KEY } from "./config";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <LoadScript googleMapsApiKey={MAPS_API_KEY}>
          <App />
        </LoadScript>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
