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
        <div>
            <img src={props.image} alt="no existe la imagen" />
        </div>
            <h3>Diets</h3>
        {
            diets.map(diet => <p className="diet">{diet || diet.name}</p>)
        }
        <div>
        </div>
        </div>
        <Link to={`/recipes/${props.id}`}>
                  <button className="button-detail">Detail</button>
              </Link> 
    </div>
}