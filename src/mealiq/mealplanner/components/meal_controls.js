import React from "react";
import {connect} from "react-redux";
import {recipeOptionsShow} from "../services/operations";

const MealControls = (props) => {
    return <div className="recipe-controls row">
        <div className="col-3"></div>
        <div className="col-3"></div>
        <div className="col-3"></div>
        <div className="col-3"><a href="#" onClick={() => props.recipeOptionsShow(props.today, props.plannedMeal.date, props.plannedMeal.meal_type)}>Change</a></div>
    </div>;
};

const mapStateToProps = (state) =>
    ({
        today: state.today
    });

const mapDispatchToProps = dispatch => {
    return {
        recipeOptionsShow: (today, day, mealType) => dispatch(recipeOptionsShow(today, day, mealType)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MealControls);
