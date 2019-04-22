import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/index.css";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import "react-dates/lib/css/_datepicker.css";

import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

// addExpense => water bill
store.dispatch(addExpense({ description: "water bill", amount: 4500 }));
store.dispatch(
  addExpense({ description: "gas bill", amount: 0, createdAt: 1000 })
);
store.dispatch(addExpense({ description: "rent", amount: 109500 }));

// getVisibleExpenses
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
