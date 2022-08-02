import {Link} from "react-router-dom";
import "./recipe.css";

export default function Recipe (props) {
    let diets = []
    if(props.diets){ 
        diets = props.diets
    }

    return <div className="cardContainer">
               <Link style={{textDecoration:'none', color:'#2D3642'}} to={`/recipes/${props.id}`}> 
                        <div className="cardTitle">
                            {props.name}
                        </div>
                        <div className="imgContainer">
                            <img src={props.image} alt="no existe la imagen" />
                        </div>
                    
                        <div className="cardDiets">
                            {
                                diets.map(diet => <div className="diet">{diet || diet.name}</div>)
                            }
                        </div>
                </Link> 
            </div>
}