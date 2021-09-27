const mergePlannedMeals = (originalPlannedMeals, newPlannedMeals) => {
    let unchangedPlannedMeals = originalPlannedMeals.filter(pm => !newPlannedMeals.some(npm => pm.date === npm.date && pm.meal_type === npm.meal_type));
    return unchangedPlannedMeals.concat(newPlannedMeals);
}

const diaryReducer = (state, action) => {
    switch (action.type) {
        case 'PLANNED_MEALS_FETCH': {
            return {...state,
                plannedMeals: mergePlannedMeals(state.plannedMeals, action.plannedMeals),
                estimatedCost: action.estimatedCost,
                plannedMealsNetworkState: action.plannedMealsNetworkState
            }
        }
        case 'CHANGE_DIARY_DAY_VISIBLE': {
            return {...state, diaryDayVisible: action.day};
        }
        case "CLOSE_SELECT_WINDOW": {
            return {
                ...state,
                showSelectWindow: false,
                typingText: "",
            }
        }
        case "SET_CURRENT_MEAL_TYPE": {
            return {
                ...state,
                currentMealType: action.payload,
                showSelectWindow: true,
                recipesForChoice: null,
            }
        }
        case "GET_RECIPE_FOR_CHOICE": {
            return {
                ...state,
                recipesForChoice: action.payload,
            }
        }
        case "ADD_SELECTED_RECIPE": {
            let newRecipe = {
                date: state.today,
                meal_type: state.currentMealType,
                recipe: action.payload,
            }
            return {
                ...state,
                plannedMeals: [newRecipe, ...state.plannedMeals],
                showSelectWindow: false,
                typingText: "",
            }
        }
        case "SEARCH_TYPING_TEXT": {
            return {
                ...state,
                typingText: action.payload,
            }
        }
        default:
            return state
    }
}

export default diaryReducer
