import React from "react";
import Card from 'react-bootstrap/Card';
import classNames from "classnames";
import {connect} from "react-redux";
import {Nutrition} from "./nutrition";

class RecipeCard extends React.Component {
    render() {
        const recipe = this.props.recipe;
        if(!recipe) return null;
        return <div className={classNames("recipe-card", "row")}
                    onClick={() => { this.props.recipeDetailsShow(this.props.day, this.props.mealType)}}>
            <div className="col-4">
                <figure style={{backgroundImage: `url(${recipe.image_url})`}}></figure>
            </div>
            <div className="col-8">
                <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text>
                        <p className="short-description">{recipe.short_description}</p>
                        <p className="short-nutrition">
                            <Nutrition metric="calories" quantity={recipe.nutrition_per_serving.calories.quantity} />
                        </p>
                    </Card.Text>
                </Card.Body>
            </div>
        </div>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        recipeDetailsShow: (day, mealType) => dispatch({ type: 'RECIPE_DETAILS_SHOW', day, mealType }),
    }
};

export default connect(
    null,
    mapDispatchToProps
)(RecipeCard);
