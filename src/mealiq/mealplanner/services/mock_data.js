import {dayFromDate, daysToPlan} from "./timeline";

export const brusselsSproutPancakes = {
    recipe_id: '910d1750bca6eabd989829fb2381ce74',
    recipe_url: 'https://www.deliciousmagazine.co.uk/recipes/leek-risotto-with-lemon-crumbs/',
    image_url: 'https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/511940-1-eng-GB_leek-risotto-and-lemon-crumbs-768x970.jpg',
    title: 'Leek risotto with lemon crumbs',
    short_description: '',
    publisher: 'Delicious',
    cooking_time: 29,
    nutrition_per_serving: {
        carbohydrate: {
            quantity: 4.83
        },
        fibre: {
            quantity: 0.97
        },
        saturates: {
            quantity: 0.21
        },
        salt: {
            quantity: 0.02
        },
        energy: {
            quantity: 179.8
        },
        sugars: {
            quantity: 0.53
        },
        calories: {
            quantity: 42.97
        },
        protein: {
            quantity: 2.28
        },
        fat: {
            quantity: 1.76
        }
    }
};

export const apricotBalls = {
    recipe_id: 'apricot_chestnut_and_76988',
    recipe_url: 'http://www.bbc.co.uk/food/recipes/apricot_chestnut_and_76988',
    image_url: 'https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/07/asparagus-risotto-768x960.jpg',
    title: 'Apricot, chestnut and aduki balls with roasted vegetables and white wine miso gravy',
    short_description: '',
    publisher: 'BBC',
    cooking_time: 29,
    nutrition_per_serving: {
        carbohydrate: {
            quantity: 4.83
        },
        fibre: {
            quantity: 0.97
        },
        saturates: {
            quantity: 0.21
        },
        salt: {
            quantity: 0.02
        },
        energy: {
            quantity: 179.8
        },
        sugars: {
            quantity: 0.53
        },
        calories: {
            quantity: 42.97
        },
        protein: {
            quantity: 2.28
        },
        fat: {
            quantity: 1.76
        }
    }
};

export const broccoliAnchovyPasta = {
    recipe_id: '6f8df4cdcb7cdab90050109a13ad3949',
    recipe_url: 'https://www.deliciousmagazine.co.uk/recipes/broccoli-and-anchovy-pasta-with-lemon-breadcrumbs/',
    image_url: 'https://www.deliciousmagazine.co.uk/wp-content/uploads/2015/11/602035-1-eng-GB_broccoli-and-anchovy-pasta-with-lemon-breadcrumbs.jpg',
    title: 'Broccoli and anchovy pasta with lemon breadcrumbs',
    short_description: 'Crunchy lemon breadcrumbs take this quick dinner recipe from a simple budget meal to an Italian-style midweek winner.',
    publisher: 'Delicious',
    cooking_time: 29,
    nutrition_per_serving: {
        carbohydrate: {
            quantity: 4.83
        },
        fibre: {
            quantity: 0.97
        },
        saturates: {
            quantity: 0.21
        },
        salt: {
            quantity: 0.02
        },
        energy: {
            quantity: 179.8
        },
        sugars: {
            quantity: 0.53
        },
        calories: {
            quantity: 42.97
        },
        protein: {
            quantity: 2.28
        },
        fat: {
            quantity: 1.76
        }
    }
};

export const lambSteak = {
    recipe_id: 'moroccanspicedlambst_92430',
    recipe_url: 'http://www.bbc.co.uk/food/recipes/moroccanspicedlambst_92430',
    image_url: 'https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/07/694042-1-eng-GB_huevos-rancheros-768x960.jpg',
    title: 'Moroccan-spiced lamb steak with couscous \'cake\' and pomegranate',
    short_description: '',
    publisher: 'BBC',
    cooking_time: 29,
    nutrition_per_serving: {
        carbohydrate: {
            quantity: 4.83
        },
        fibre: {
            quantity: 0.97
        },
        saturates: {
            quantity: 0.21
        },
        salt: {
            quantity: 0.02
        },
        energy: {
            quantity: 179.8
        },
        sugars: {
            quantity: 0.53
        },
        calories: {
            quantity: 42.97
        },
        protein: {
            quantity: 2.28
        },
        fat: {
            quantity: 1.76
        }
    }
};

const today = new Date();
const tomorrow = new Date(today.getTime() + 24 * 3600 * 1000);

export const preloadedState = {
    plannedMealsNetworkState: {"loaded": true, "error": null}, // or {"loading": true}
    planDays: daysToPlan(7, Date.now()),
    planMealTypes: ["Breakfast", "Lunch", "Dinner"],
    plannedMeals: [
        {
            date: dayFromDate(today),
            meal_type: "Breakfast",
            recipe: brusselsSproutPancakes
        },
        {
            date: dayFromDate(today),
            meal_type: "Lunch",
            recipe: lambSteak
        },
        {
            date: dayFromDate(today),
            meal_type: "Dinner",
            recipe: apricotBalls
        },
        {
            date: dayFromDate(tomorrow),
            meal_type: "Breakfast",
            recipe: brusselsSproutPancakes
        },
        {
            date: dayFromDate(tomorrow),
            meal_type: "Lunch",
            recipe: lambSteak
        },
        {
            date: dayFromDate(tomorrow),
            meal_type: "Dinner",
            recipe: apricotBalls
        }
    ],
    today: dayFromDate(today),
    diaryDayVisible: dayFromDate(today),
};

export const preloadedRecipeOptions = [
    brusselsSproutPancakes,
    apricotBalls,
    broccoliAnchovyPasta,
    lambSteak
];