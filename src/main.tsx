import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, responsiveFontSizes } from "@mui/material";
import { theme } from "./layout/HomeLayout";
import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./router";

const newTheme = responsiveFontSizes(theme);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={newTheme}>
        {/* <RouterProvider router={router} /> */}
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
