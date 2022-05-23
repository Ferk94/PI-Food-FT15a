import {FILTER_RECIPES, GET_RECIPES, RECIPE_DETAIL, ORDER_RECIPES, SEARCH_RECIPES, ORDER_BY_SCORE, SEARCH_API_OR_DB} from "../actions/constantes"


 function filter(list, type){
    if(type === "all diets"){
        return list
    }
    let filtro = list.filter(recipe => {
        return recipe.diets && recipe.diets.includes(type)
    })
    return filtro; 
}

function orderAscDesc(list, type){
    let temp = JSON.parse(JSON.stringify(list))
    if(type === "asc"){
        temp.sort((a, b) => {
            if(a.name > b.name){
                return 1;
            }
            if(b.name > a.name){
                return -1;
            }
            return 0;
        })
    }
    else if(type === "desc"){
        temp.sort((a, b) => {
            if(a.name > b.name){
                return -1;
            }
            if(b.name > a.name){
                return 1;
            }
            return 0;
        })
    }
    return temp;
}

function searchApiOrDbAux(list, type){

    let recipes;
    if(type === 'api'){
        recipes = list.filter(e => {
            console.log(e.id, 'el id de cada receta api')
            return typeof(e.id) === 'number'
        })
    }
    else if(type === 'db'){
        recipes = list.filter(e => {
            console.log(e.id, 'el id de cada receta DB')
            return typeof(e.id) === 'string'
        })
    }
    console.log(recipes, 'las recetas filtradas por db o api antes de retornar')
    return recipes;
}

function orderByScore(list, type){
    let temp = JSON.parse(JSON.stringify(list))
    if(type === "min"){
        temp.sort((a, b) => {
            if(a.score > b.score){
                return 1;
            }
            if(b.score > a.score){
                return -1;
            }
            return 0;
        })
    }
    else if(type === "max"){
        temp.sort((a, b) => {
            if(a.score > b.score){
                return -1;
            }
            if(b.score > a.score){
                return 1;
            }
            return 0;
        })
    }
    return temp;
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
            foundRecipes: action.payload,
            filteredRecipes: action.payload
        }
        // case RECIPE_DETAIL:
        //     return {
        //         ...state,
        //         recipeDetail: action.payload
        //     }
        case SEARCH_RECIPES:
            return {
                ...state,
                filteredRecipes: action.payload
            }
        case FILTER_RECIPES:
            return {
                ...state,
                filteredRecipes: filter(state.filteredRecipes, action.payload)
            }
        case ORDER_RECIPES:
            return {
                ...state,
                filteredRecipes: orderAscDesc(state.filteredRecipes, action.payload)
            }
        case ORDER_BY_SCORE:
            return {
                ...state,
                filteredRecipes: orderByScore(state.filteredRecipes, action.payload)
            }
        case SEARCH_API_OR_DB:
            return {
                ...state,
                filteredRecipes: searchApiOrDbAux(state.filteredRecipes, action.payload)
            }
        default: return state
    }
}

export default reducer;