import { useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import Recipe from "./recipe"
// import {Link} from "react-router-dom";

import "./recipes.css"


export default function Recipes ({ showedRecipes }) {

    // let initialPage = 1;
    // const [page, setPage] = useState(initialPage)
    // const filteredRecipes = useSelector(state => state.filteredRecipes)
    // const foundRecipes = useSelector(state => state.foundRecipes)

    // let maxPage;
    // let showedRecipes = [];
    // let notResults = "the current search does not return results"
    // maxPage = Math.ceil(filteredRecipes.length / 9)

    // function handleNext(){
    //     if(page < maxPage){
    //         setPage(page + 1)
    //     }
    // }

    // function handlePrevious(){
    //     if(page > 1){
    //         setPage(page - 1)
    //     }
    // }
  
    // showedRecipes = filteredRecipes.slice((page -1)*9, page*9)

    // if(foundRecipes.length === 0){
    //      notResults = "the current search does not return results"
    // }else{
    //      notResults = ""
    // }

    return <div className='cardsContainer'>
               {/* <h1>{notResults}</h1> */}
        {/* <div>
               <p>{page} de {maxPage}</p>
               <button className="button-previous" type="button" onClick={(e) => handlePrevious(e)}>Previous Page</button>
               <button className="button-next" type="button" onClick={(e) => handleNext(e)}>Next Page</button>
        </div> */}
     
           {
               showedRecipes.map((recipe, index) =>{
                return   <div className="recipeCards" key={index}>
                       <Recipe
                       name={recipe.name}
                       image={recipe.image}
                       id={recipe.id}
                       diets={recipe.diets}
                       score={recipe.score}
                       />
                       {/* <Link to={`/recipes/${recipe.id}`}><button>Detail</button></Link> */}
                   </div>
               })
           }
      
    </div>
}