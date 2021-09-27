import React from "react";
import { connect } from "react-redux";
import { FormControl } from "react-bootstrap";
import RecipersForChoice from "./recipes_selector"

function ModalWindow({ showSelectWindow, closeSelectWindows, searchText, recipesForChoice, currentMealType, typingText }) {

    if (!showSelectWindow) {
        return null;
    }

    let recipesMarkup;
    if (recipesForChoice) {
        recipesMarkup = recipesForChoice.filter(elem => elem.meal_type.includes(currentMealType.toLowerCase()))
            .filter(elem => elem.title.toLowerCase().includes(typingText.toLowerCase()))
            .map(elem => {
                return <RecipersForChoice key={elem.recipe_id} recipe={elem} />
            });
        if (recipesMarkup.length === 0) {
            recipesMarkup = <div className="emptyRecipes">No recipes for choice!</div>;
        }
    }

    return (
        <>
            <div className="modalBackground">
                <div className="mealsSelector">
                    <div className="sticky">
                        <button className="closeButton" onClick={closeSelectWindows}>X</button>
                        <FormControl onChange={e => searchText(e.target.value)} placeholder="Search for a new recipe" />
                    </div>
                    {recipesMarkup}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        recipesForChoice: state.recipesForChoice,
        showSelectWindow: state.showSelectWindow,
        currentMealType: state.currentMealType,
        typingText: state.typingText || "",
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeSelectWindows: () => dispatch({ type: "CLOSE_SELECT_WINDOW" }),
        searchText: (payload) => dispatch({ type: "SEARCH_TYPING_TEXT", payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);