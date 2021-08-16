import {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import "./recipeDetail.css";


export default function RecipeDetail () {
    const [recipe, setRecipe] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getRecipeById(id)
    }, [id])

    function getRecipeById(id){
        
       axios.get(`http://localhost:3001/recipes/` + id)
        .then((recipe) => {
            setRecipe(recipe.data)
        })
        
    }

console.log(recipe.diets)


    return <div>
        {
            recipe && recipe.diets && <div>
                <h1>Recipe</h1>
                <div>{recipe?.name}</div>
                <img src={recipe?.image} alt="no existe la imagen"/>
                <h2>Summary</h2>
                <div>{recipe?.summary.replace( /(<([^>]+)>)/ig, "")}</div>
                <h3>Score</h3>
                <div>{recipe?.score}</div>
                <h3>Health Score</h3>
                <div>{recipe?.healthScore}</div>
                <h3>Steps</h3>
                <div>{recipe?.steps?.replace( /(<([^>]+)>)/ig, "")}</div>
                <h3>Diets</h3>
                {
                    recipe.diets.map(diet => <div>{diet || diet.name}</div>)
                }
            </div>
            
        }
    </div>
}