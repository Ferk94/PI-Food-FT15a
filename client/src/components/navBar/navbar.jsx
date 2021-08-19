import {Link} from "react-router-dom";
import "./navBar.css";



export default function NavBar (props) {


    return <div className="navBar">
            <button className="homeButton" ><Link to="/recipes" style={{textDecoration: "none", color:"maroon"}}>Home</Link></button>
        <nav>
            <button className="aboutButton"><Link to="/recipes/about" style={{textDecoration: "none", color:"maroon"}} >About</Link> </button>
            <button className="landingButton"><Link to="/" style={{textDecoration: "none", color:"maroon"}}>Landing Page</Link></button>
            {/* <button className="searchButton" onClick={(e) => handleClick(e)} ><Link to="/search" style={{textDecoration: "none", color:"maroon"}}>Search Recipe</Link></button> */}
            <button className="createButton"><Link to="/recipes/addrecipe" style={{textDecoration: "none", color:"maroon"}}>Create Recipe</Link></button>
        </nav>
    </div>
}