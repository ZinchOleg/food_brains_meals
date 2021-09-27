import React from "react";
import DayView from "./day_view";
import DiaryNav from "./diary_nav";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";

const Diary = (props) => {
        const dayPlannedMeals = props.plannedMeals.filter(pm => pm.date === props.diaryDayVisible);
        console.log(dayPlannedMeals);
        return <React.Fragment>
            <div className="sticky-top diary-header">
                <div className="float-right">
                    <Button variant="secondary">Prefs</Button>
                </div>
                <h2>My Diary</h2>
                <DiaryNav />
            </div>
            {props.plannedMealsNetworkState.loading ? "Loading meal plans..." : <DayView dayPlannedMeals={dayPlannedMeals} />}
        </React.Fragment>
};

const mapStateToProps = (state) =>
    ({
        today: state.today,
        planDays: state.planDays,
        diaryDayVisible: state.diaryDayVisible,
        plannedMealsNetworkState: state.plannedMealsNetworkState,
    });

export default connect(
    mapStateToProps
)(Diary);
