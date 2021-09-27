import React from "react";
import {connect} from "react-redux";
import Diary from "./diary";
import {appLoad} from "../services/operations";

class App extends React.Component {

    componentDidMount() {
        this.props.appLoad(this.props.today, this.props.planDays)
    }

    render() {
        return <Diary plannedMeals={this.props.plannedMeals}
                           today={this.props.today}
                           planDays={this.props.planDays}
                           diaryDayVisible={this.props.diaryDayVisible}
                    />;
    }
}

const mapStateToProps = (state) =>
    ({
        plannedMeals: state.plannedMeals,
        today: state.today,
        planDays: state.planDays,
        diaryDayVisible: state.diaryDayVisible
    });

const mapDispatchToProps = dispatch => {
    return {
        appLoad: (today, planDays) => dispatch(appLoad(today, planDays)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
