import {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import "./recipeDetail.css";


export default function RecipeDetail () {
    const [recipe, setRecipe] = useState({})
    const {id} = useParams()


    console.log(id, 'el id q voy a enviar al back')
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


    return <div className="global">
        {
            recipe && recipe.diets && <div>
                <h1>Recipe</h1>
                {/* <h2>Title</h2> */}
                <div className="name-recipe">{recipe?.name}</div>
                <div className="img">
                    <img src={recipe?.image} alt="no existe la imagen"/>
                </div>
                <h2>Summary</h2>
                <div className="summary-recipe">{recipe?.summary.replace( /(<([^>]+)>)/ig, "")}</div>
                <h3>Score</h3>
                <div className="score-recipe">{recipe?.score}</div>
                <h3>Health Score</h3>
                <div className="healthScore-recipe">{recipe?.healthScore}</div>
                <h3>Steps</h3>
                <div className="steps-recipe">{recipe?.steps?.replace( /(<([^>]+)>)/ig, "")}</div>
                <h3>Diets</h3>
                {
                    recipe.diets.map(diet => <div className="diets-recipe">{diet || diet.name}</div>)
                }
            </div>
            
        }
    </div>
}