import axios from 'axios'
import {RECIPES_URL, BASE_URL} from '../constantes'
import { GET_RECIPES, FILTER_RECIPES, ORDER_RECIPES, SEARCH_RECIPES } from './constantes'

// export function getRecipes() {
//     return function(dispatch) {
//         return axios.get(RECIPES_URL)
//         .then((recipes) => {
//             dispatch({
//                 type: GET_RECIPES, 
//                 payload: recipes.data
//             })
//         })
//     }
// }

export const searchRecipes = function(payload){


    return function(dispatch)
    {
        axios.get(`${BASE_URL}recipes?name=${payload}`)
        .then((res, err) => {
            dispatch({
                type: SEARCH_RECIPES,
                payload: res.data
            })
        })
    }
}

export const filterRecipes = function(payload){

    return(
    {
        type: FILTER_RECIPES,
        payload
    });
}

export const orderRecipes = function(payload){

    return(
    {
        type: ORDER_RECIPES,
        payload
    });
}

// export const recipeDetail = function(payload){

//     return function(dispatch)
//     {
//         axios.get()
//         .then((res, err) => {
//             dispatch({
//                 type: "showRecipeDetail",
//                 payload: res.data
//             })
//         })
//     }
// }