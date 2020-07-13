import {MEALS} from "../../data/dummy-data"

const initialState = {

    meals : MEALS ,
    filteredMeals : MEALS ,
    favoriteMeals : []

}


const mealReducers = (state = initialState,action)=>{

    if(action.type === 'FAVORITED'){

        const existingIndex = state.favoriteMeals.findIndex(meal=> meal.id === action.payload);

        if(existingIndex >= 0){

            const updatedFavMeals = [...state.favoriteMeals];

            updatedFavMeals.splice(existingIndex,1)

             return {...state,favoriteMeals : updatedFavMeals}
        }else{

            const meal = state.meals.find(meal=>meal.id === action.payload);
            return {...state,favoriteMeals : state.favoriteMeals.concat(meal)}
        }
        

    }else if(action.type ==='FILTERED'){

        const appliedFilters = action.payload;
        const filteredMeals = state.meals.filter(meal=>{

            if(appliedFilters.glutenFree && !meal.isGlutenFree){

                return false;

            }
            if(appliedFilters.lactoseFree && !meal.isLactoseFree){

                return false;

            }
            if(appliedFilters.vegatarian && !meal.isVegetarian){

                return false;

            }
            if(appliedFilters.vegan && !meal.isVegan){

                return false;

            }

            return true;


        })

        return {...state,filteredMeals}

    }else{

        return state;

    }
    

}

export default mealReducers;