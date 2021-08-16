import {FILTER_RECIPES, GET_RECIPES, ORDER_RECIPES, SEARCH_RECIPES} from "../actions/constantes"

const filter = function(list, type){
    if(type === "all diets"){
        return list
    }
    let f = list.filter(recipe => {
        return recipe.diets && recipe.diets.includes(type)
    })
    return f;
}

function order(list, type){
    let temp = JSON.parse(JSON.stringify(list))
    if(type === "asc"){
        temp.sort((a, b) => {
            if(a.title > b.title){
                return 1
            }
            if(b.title > a.title){
                return -1
            }
            return 0;
        })
    }
    else if(type === "desc"){
        temp.sort((a, b) => {
            if(a.title > b.title){
                return -1
            }
            if(b.title > a.title){
                return 1
            }
            return 0;
        })
    }

    return temp
}


var initialState = {
    foundRecipes: [],
    // recipeDetail: {},
    filteredRecipes: []
}

function reducer(state = initialState, action) {

    switch(action.type) {
        case GET_RECIPES:
          
            return {
            ...state,
            foundRecipes: action.payload
        }
        case SEARCH_RECIPES:
            return {
                ...state,
                foundRecipes: action.payload,
                filteredRecipes: action.payload
            }
        case FILTER_RECIPES:
            return {
                ...state,
                filteredRecipes: filter(state.foundRecipes, action.payload)
            }
        case ORDER_RECIPES:
            return {
                ...state,
                filteredRecipes: order(state.filteredRecipes, action.payload)
            }
        default: return state
    }
}

export default reducer;