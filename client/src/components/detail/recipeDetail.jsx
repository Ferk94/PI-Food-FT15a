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


    return <div className="detailContainer">
        {
            recipe && recipe.diets && <div className="detailInfoContainer">
                <div className="detailImg">
                <div className="detailShortInfo">
                <div className="detailTitle">{recipe?.name}</div>
                    <img src={recipe?.image} alt="no existe la imagen"/>
                </div>
                <div className="detailPieInfo">
                <div className="detailDiets">
                <h3>Diets</h3>
                {
                    recipe.diets.map(diet => <div key={diet?.name} className="diets-recipe">{diet || diet?.name}</div>)
                }
                </div>
                <div>
                <h3>Health Score</h3>
                <div>{recipe?.healthScore}</div>
                </div>
                </div>
                </div>
                <div className="detailLargeInfo">
                <h2>Summary</h2>
                <div>{recipe?.summary.replace( /(<([^>]+)>)/ig, "")}</div>
                {
                    recipe?.steps && <div>

                        <h3>Steps</h3>
                        <div>{recipe?.steps?.replace( /(<([^>]+)>)/ig, "")}</div>
                    </div>
                }
                </div>
            </div>
            
        }
    </div>
}