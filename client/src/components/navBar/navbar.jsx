import {Link} from "react-router-dom";
// import { useDispatch } from "react-redux";
// import {searchRecipes} from "../../actions/actions";
import "./navBar.css";



export default function NavBar (props) {

    // const dispatch = useDispatch()

    // function handleClick(e){
    //     dispatch(searchRecipes())
    // }

    return <div className="navBar">
            <button className="homeButton" ><Link to="/recipes" style={{textDecoration: "none", color:"maroon"}}>Home</Link></button>
        <nav>
        <button className="landingButton"><Link to="/" style={{textDecoration: "none", color:"maroon"}}>Landing Page</Link></button>
            {/* <button className="searchButton" onClick={(e) => handleClick(e)} ><Link to="/search" style={{textDecoration: "none", color:"maroon"}}>Search Recipe</Link></button> */}
            <button className="createButton"><Link to="/recipes/addrecipe" style={{textDecoration: "none", color:"maroon"}}>Create Recipe</Link></button>
        </nav>
    </div>
}