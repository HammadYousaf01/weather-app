import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "store/store.ts";
import ThemeProvider from "theme/ThemeProvider";

import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
