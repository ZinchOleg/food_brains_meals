import {fetchDayPlan} from "./api_calls";
import {preloadedState} from "./mock_data";

const plannedMealsFetch = (plannedMeals, estimatedCost, plannedMealsNetworkState) =>
    ({type: 'PLANNED_MEALS_FETCH', plannedMeals, estimatedCost, plannedMealsNetworkState});

const getRecipesForChoice = (payload) => ({type: "GET_RECIPE_FOR_CHOICE", payload});
const setCurrentMealType = (payload) => ({type: "SET_CURRENT_MEAL_TYPE", payload});

const mockUrl = "https://mealiq-asset-eu-west-1.s3-eu-west-1.amazonaws.com/interview/recipe_options.json?day=2019-10-09&meal_type=Breakfast";

export const appLoad = (today, planDays) => {
    return (dispatch) => {
        dispatch(plannedMealsFetch([], 0, {loading: true}));
        fetchDayPlan(today, planDays) // fetchCurrentPlannedMeals(planDays)
            .then(response => {
                // if(response.ok) {
                response.json().then(jsonBody => {
                    dispatch(plannedMealsFetch(jsonBody.plans, jsonBody.cost, {loaded: true, error: null}));
                })
                // } else {
                //     response.text().then(errorText => dispatch(plannedMealsFetch(preloadedState.plannedMeals, 0.01, {loaded: false, error: "Response not OK: " + errorText})));
                // }
            })
            .catch(reason => dispatch(plannedMealsFetch(preloadedState.plannedMeals, 0.01, {
                loaded: false,
                error: "Caught: " + reason.toString()
            })));
    }
};

export const recipeOptionsShow = (today, day, mealType) => {
    return (dispatch) => {
        fetch(mockUrl).then(response => response.json()).then(data => {
            dispatch(getRecipesForChoice(data.meals));
        });
        dispatch(setCurrentMealType(mealType));
    }
};