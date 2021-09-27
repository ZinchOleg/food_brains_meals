import React from "react";
import {connect} from "react-redux";
import RecipeCard from "./recipe_card";
import MealControls from "./meal_controls";
import ModalWindow from "./RecipesForChoice/modal_window";

const cardContents = (plannedMeal) => {
    return <RecipeCard day={plannedMeal.date} mealType={plannedMeal.meal_type} recipe={plannedMeal.recipe}/>
}

const DayView = (props) => {

    return <div className="day-view">
        {props.planMealTypes.map(mealType => {
            let plannedMeal = props.dayPlannedMeals.find(pm => pm.meal_type === mealType);
            return <div className="day-meal" key={"day-meal-" + plannedMeal.date + "-" + plannedMeal.meal_type}>
                <div>{mealType}</div>
                {cardContents(plannedMeal)}
                <MealControls plannedMeal={plannedMeal} />
            </div>
        })}

        <br/><br/><br/>
        <ModalWindow/>
    </div>
}

const mapStateToProps = (state) =>
    ({
        day: state.diaryDayVisible,
        planMealTypes: state.planMealTypes,
    });



export default connect(
    mapStateToProps,
    null
)(DayView);
