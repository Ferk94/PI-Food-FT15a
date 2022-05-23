import axios from 'axios'
import {RECIPES_URL, BASE_URL} from '../constantes'
import { GET_RECIPES, RECIPE_DETAIL, FILTER_RECIPES, ORDER_RECIPES, SEARCH_RECIPES, ORDER_BY_SCORE, SEARCH_API_OR_DB } from './constantes'

export function getRecipes() {
    return function(dispatch) {
        return axios.get(RECIPES_URL)
        .then((recipes) => {
            dispatch({
                type: GET_RECIPES, 
                payload: recipes.data
            })
        })
    }
}

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

export const orderByScore = function(payload){

    return (
        {
            type: ORDER_BY_SCORE,
            payload
        }
    )
}

export const searchApiOrDb = function(payload){
    console.log(payload, 'el payload en la action apiOrDb')
    return (
        {
            type: SEARCH_API_OR_DB,
            payload
        }
    )
}

// export const recipeDetail = function(payload){

//     return function(dispatch)
//     {
//         axios.get(`http://localhost:3001/recipes/` + payload)
//         .then((res, err) => {
//             dispatch({
//                 type: "RECIPE_DETAIL",
//                 payload: res.data
//             })
//         })
//     }
// }