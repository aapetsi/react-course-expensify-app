import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/index.css";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import "react-dates/lib/css/_datepicker.css";

import "./firebase/firebase";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
