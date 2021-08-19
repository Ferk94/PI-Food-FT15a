import React from "react";
import Postgres from "../../img/postgresql.png";
import ReactLogo from "../../img/react.png";
import Express from "../../img/express.png";
import Node from "../../img/node.png";
import Redux from "../../img/redux.png";
import Fer from "../../img/yop.jpg"
import "./about.css";

export default function About () {
    return (
        <div className="about">
      <h1>About me:</h1>
      <h2>Fernando Kaganovicz</h2>
      <h4>Full Stack Developer</h4>
      <img src={Fer} width="200" heigth="50" alt="img not found"/>
      <div className="links">
      <h2>GitHub</h2>
      <a href="https://github.com/Ferk94">Ferk94</a>
      <h2>Linkedin</h2>
      <a href="https://www.linkedin.com/in/fernando-kaganovicz-b537aa212/">Fernando Kaganovicz</a>
      </div>
      <h1>About this website:</h1> 
      <h2>
        This website is my individual project in Henry's bootcamp. It's been
        built with PostgreSQL for the database, Node and Express for the back
        end and React/Redux for the front end. All the styling was made with
        pure CSS using styled-components library. <br />
        It consumes data from the following{" "}
        <a href="https://spoonacular.com/food-api">API</a> 
      </h2>
      <div className="pern">
        <a href="https://www.postgresql.org/">
          <img src={Postgres} width="100" heigth="50" className="pernIcon" alt="img not found" />
        </a>
        <a href="https://expressjs.com/">
          <img src={Express} width="150" height="50" className="pernIcon" alt="img not found" />
        </a>
        <a href="https://redux.js.org/">
          <img src={Redux} width="100" height="50" className="pernIcon" alt="img not found" />
        </a>
        <a href="https://reactjs.org/">
          <img src={ReactLogo} width="100" height="50" className="pernIcon" alt="img not found" />
        </a>
        <a href="https://nodejs.org/">
          <img src={Node} width="100" height="80    " className="pernIcon" alt="img not found" />
        </a>
      </div>
        </div>
    
    )
        
    
}

