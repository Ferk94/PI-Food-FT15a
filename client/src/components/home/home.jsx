import { useState } from "react";
import { useSelector } from "react-redux";
// import {getRecipes} from "../../actions/actions";
import SearchBar from "../searchBar/searchBar";
import Recipes from "../recipes/recipes";
import "./home.css"
import Paginate from "../paginate/paginate";

export default function Home () {
  
  const foundRecipes = useSelector(state => state.foundRecipes)
  const filteredRecipes = useSelector(state => state.filteredRecipes)
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;


    let currentRecipes;
    let maxPage;
  if(filteredRecipes.length === 0){
        currentRecipes = Array.isArray(foundRecipes)
        ? foundRecipes?.slice(indexOfFirstRecipe, indexOfLastRecipe)
        : foundRecipes;
    
        maxPage = Math.ceil(foundRecipes.length / 9)
  }

  if(filteredRecipes.length > 0){
    currentRecipes = Array.isArray(foundRecipes)
    ? filteredRecipes?.slice(indexOfFirstRecipe, indexOfLastRecipe)
    : filteredRecipes;

    maxPage = Math.ceil(filteredRecipes.length / 9)
  }

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleNext(){
    if(currentPage < maxPage){
        setCurrentPage(currentPage + 1)
    }
}

function handlePrevious(){
    if(currentPage > 1){
        setCurrentPage(currentPage - 1)
    }
}

    console.log(currentRecipes, 'las recetas current en home')

    return <div className="home">
        <SearchBar/>
        <Paginate
            recipesPerPage={recipesPerPage}
            foundRecipes={filteredRecipes?.length}
            paginado={paginado}
            previous={handlePrevious}
            next={handleNext}
            page={currentPage}
            maxPage={maxPage}
        />
        <Recipes
            showedRecipes={currentRecipes}
        /> 
    </div>
} 