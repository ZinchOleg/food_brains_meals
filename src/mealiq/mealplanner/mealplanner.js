import React from "react";
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import diaryReducer from './reducers'
import App from './components/app'
import {dayFromDate, daysToPlan} from "./services/timeline";
import './styles/mealplanner.css'

const now = Date.now();
const numDaysToPlan = 7;
const planDays = daysToPlan(numDaysToPlan, now);
const planMealTypes = ["Breakfast", "Lunch", "Dinner"];

const emptyPlans = (days, mealTypes) => days.map(date =>
    mealTypes.map(meal_type => ({
        date,
        meal_type
    }))
).flat();

const initialState = {
    plannedMealsNetworkState: {"loaded": false, "error": null},
    planDays,
    planMealTypes,
    plannedMeals: emptyPlans(planDays, planMealTypes),
    today: dayFromDate(new Date()),
    diaryDayVisible: dayFromDate(new Date()),
};

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(
    diaryReducer,
    initialState,
    enhancer
);

let root = document.createElement("div");
root.setAttribute("id", "app_container");
document.body.appendChild(root);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app_container")
);

if (module.hot) {
  module.hot.accept();
}
