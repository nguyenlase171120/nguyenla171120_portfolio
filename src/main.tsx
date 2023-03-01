import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, BrowserRouter } from "react-router-dom";
import router from "./router";
import { ThemeProvider, responsiveFontSizes } from "@mui/material";
import { theme } from "./layout/HomeLayout";
import { Provider } from "react-redux";
import store from "./redux/store";

const newTheme = responsiveFontSizes(theme);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={newTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
