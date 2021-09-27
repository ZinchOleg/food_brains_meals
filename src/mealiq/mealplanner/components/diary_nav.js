import React from "react";
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";

const dayLabel = (dayIndex) => "Day " + (dayIndex + 1);

const DiaryNav = (props) => {
    let dayIndex = props.planDays.indexOf(props.diaryDayVisible);
    let prevText = "";
    let nextText = "";
    let currentText = dayLabel(dayIndex);
    if(dayIndex > 0) {
        let prevIndex = dayIndex - 1;
        let prevDay = props.planDays[prevIndex];
        prevText = <Button onClick={() => props.changeDiaryDayVisible(prevDay)}>&laquo;</Button>;
    }
    if(dayIndex < props.planDays.length - 1) {
        let nextIndex = dayIndex + 1;
        let nextDay = props.planDays[nextIndex];
        nextText = <Button onClick={() => props.changeDiaryDayVisible(nextDay)}>&raquo;</Button>;
    }
    return <div className="diary-nav row">
        <div className="col-4">{prevText}</div>
        <div className="col-4">{currentText}</div>
        <div className="col-4">{nextText}</div>
    </div>;
};


const mapStateToProps = (state) =>
    ({
        today: state.today,
        planDays: state.planDays,
        diaryDayVisible: state.diaryDayVisible
    });

const mapDispatchToProps = dispatch => {
    return {
        changeDiaryDayVisible: (day) => dispatch({type: 'CHANGE_DIARY_DAY_VISIBLE', day})
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DiaryNav);
