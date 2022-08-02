import {NavLink} from "react-router-dom";
import "./navBar.css";



export default function NavBar (props) {


    return <div className="navBar">
            <button className="landingNavButton"><NavLink exact to="/" activeClassName="active" style={{textDecoration: "none", color: '#DCE3E8'}}>Landing Page</NavLink></button>
        <nav>
            <button className="homeNavButton" ><NavLink exact to="/recipes" activeClassName="active" style={{textDecoration: "none", color: '#DCE3E8'}}>Home</NavLink></button>
            <button className="createNavButton"><NavLink exact to="/recipes/addrecipe"  style={{textDecoration: "none", color: '#DCE3E8'}}>Create Recipe</NavLink></button>
            <button className="aboutNavButton"><NavLink exact to="/recipes/about" activeClassName="active" style={{textDecoration: "none", color: '#DCE3E8'}}>About</NavLink> </button>
            {/* <button className="searchButton" onClick={(e) => handleClick(e)} ><Link to="/search" style={{textDecoration: "none", color:"maroon"}}>Search Recipe</Link></button> */}
        </nav>
    </div>
}