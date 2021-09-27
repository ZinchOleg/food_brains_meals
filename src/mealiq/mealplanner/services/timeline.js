export const daysToPlan = (numDaysToPlan, now) => {
    let days = [];
    for(let i = 0; i < numDaysToPlan; i++) {
        const planDate = new Date(now);
        planDate.setDate(planDate.getDate() + i);
        days.push(dayFromDate(planDate));
    }
    return days;
}

export const shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  export function dayFromDate(date) {
      let dateObj = date;
      if( typeof dateObj === "string" ) {
          dateObj = new Date(date);
      }
    return (
        dateObj.getFullYear() +
      "-" +
      ("0" + (dateObj.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + dateObj.getDate()).slice(-2)
    );
  }
  
  export function slotId(date, mealType) {
    return dayFromDate(date) + "-" + mealType;
  }