import React from "react";

const labelsForMetric = {
    calories: "Calories",
    fat: "Fat",
    saturates: "Saturates",
    sugars: "Sugar",
    protein: "Protein",
    carbohydrate: "Carbs",
    fibre: "Fibre",
    salt: "Salt"
}

const unitForMetric = (metricName) => metricName === "calories" ? "kCal" : " g";

export const Nutrition = (props) => <React.Fragment>
    <span className="metric">{labelsForMetric[props.metric]} </span> <b className="quantity">{props.quantity.toFixed(2)}{unitForMetric(props.metric)}</b>
</React.Fragment>