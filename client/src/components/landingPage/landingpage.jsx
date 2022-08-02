import React from "react";
import {Link} from "react-router-dom"; 
import "./landing.css"

export default function LandingPage () {
    
    return   <div className="landing">

    
        {/* <img src="https://mochilerosentailandia.com/wp-content/uploads/2018/07/1-11.jpg" alt="no existe la imagen" /> */}
        <div className="landingTitle">
            Welcome!
        </div>
        
        <Link to="/recipes">    
        <button className="landingButton">Start</button>
        </Link>

   
        {/* <strong className="text">       
 
 Welcome to the page where you will find all the recipes you need
 and where you can also save your own recipes to access whenever you like.
 Feel free to explore it all!
        </strong> */}

    
        </div>  
}