const mealPlannerApiUrl = "http://localhost:5000";

export const fetchCurrentPlannedMeals = (planDays) => {
    const from = planDays[0];
    const to = planDays[planDays.length - 1];
    const planUrl = mealPlannerApiUrl + '/someurl';
    return fetch(planUrl, {credentials: 'include', method: 'GET', mode: 'no-cors'})
};

export const fetchDayPlan = (today, planDays) => {
    const from = planDays[0];
    const to = planDays[planDays.length - 1];
    const planUrl = mealPlannerApiUrl + '/someurl';
    return fetch(planUrl, {credentials: 'include', method: 'GET'})
};
