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
        <div className="aboutContainer">
      <h2>Fernando Kaganovicz</h2>
      <h4>Full Stack Developer</h4>
      <img className="aboutPhoto" src={Fer} width="200" heigth="50" alt="img not found"/>
      <div className="links">
      <a target="_blank" rel="noreferrer" href="https://github.com/Ferk94">GitHub</a>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fernando-kaganovicz-b537aa212/">Linkedin</a>
      </div>
      <div className="aboutText">
        This website is my individual project in Henry's bootcamp. It's been
        built with PostgreSQL for the database, Node and Express for the back
        end and React/Redux for the front end. All the styling was made with
        pure CSS using styled-components library. <br />
        It consumes data from the following{" "}
        <a href="https://spoonacular.com/food-api">API</a> 
      </div>
      <div className="pern">
        <a target="_blank" rel="noreferrer" href="https://www.postgresql.org/">
          <img src={Postgres} className="pernIcon" alt="img not found" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://redux.js.org/">
          <img src={Redux} className="pernIcon" alt="img not found" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://reactjs.org/">
          <img src={ReactLogo} className="pernIcon" alt="img not found" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://nodejs.org/">
          <img src={Node} className="pernIcon" alt="img not found" />
        </a>
      </div>
        </div>
    
    )
        
    
}

