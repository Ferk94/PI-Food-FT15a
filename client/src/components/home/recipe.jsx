import {Link} from "react-router-dom";
import "./recipe.css";

export default function Recipe (props) {
    let diets = []
    if(props.diets){ 
        diets = props.diets
    }
    return <div className="recipeCard">
        <h1>{props.name}</h1>
        <div className="contenido">
        <img src={props.image} alt="no existe la imagen" />
        <h3>Diets</h3>
        {
            diets.map(diet => <p className="diet">{diet || diet.name}</p>)
        }
        <Link to={`/recipes/${props.id}`}>
                  <button>Detail</button>
              </Link>
        </div>
    </div>
}