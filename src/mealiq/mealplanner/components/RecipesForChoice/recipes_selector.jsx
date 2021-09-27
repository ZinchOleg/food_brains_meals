import React from "react";
import Card from 'react-bootstrap/Card';
import classNames from "classnames";
import { Nutrition } from "../nutrition";
import { recipeOptionsShow } from "../../services/operations";
import { connect } from "react-redux";

const RecipesForChoice = (props) => {
    const onClick = () => {
        props.addSelectedRecipe(props.recipe);
    }
    const recipe = props.recipe;

    return (
        <div className="recipe-card-wrapper">
            <div className={classNames("recipe-card", "row")}>
                <div className="col-4">
                    <figure style={{ backgroundImage: `url(${recipe.image_url})` }}></figure>
                </div>
                <div className="col-8">
                    <Card.Body>
                        <Card.Title>{recipe.title}</Card.Title>
                        <Card.Text>
                            <p className="short-description">{recipe.short_description}</p>
                        </Card.Text>
                    </Card.Body>
                </div>
            </div>
            <div className={classNames("selectButtonBlock", "row")}>
                <div className="short-nutrition">
                    <Nutrition metric="calories" quantity={recipe.nutrition_per_serving.calories.quantity} />
                </div>
                <div>
                    <button className="buttonSelect" onClick={onClick}>Select</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addSelectedRecipe: (payload) => dispatch({ type: "ADD_SELECTED_RECIPE", payload }),
    }
};

export default connect(null, mapDispatchToProps)(RecipesForChoice);

