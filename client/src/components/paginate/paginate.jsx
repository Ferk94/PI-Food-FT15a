import "./paginate.css";
import React from "react";


export default function Paginate({ recipesPerPage, foundRecipes, paginado, previous, next, page, maxPage }) {
  const pageNumbers = [];

  console.log(recipesPerPage, 'recipesPerPage en paginate', foundRecipes, 'foundRecipes en paginate')
  for (let i = 1; i <= Math.ceil(foundRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }


console.log(pageNumbers, 'numero de paginas en paginate component')
  return (
    <nav className="paginacion">
      {
        pageNumbers.length>0 ?
    <div> 
        <div>
        <p>{page} of {maxPage}</p>
        </div>
          <ul className="paginado" style={{padding: 0}}>
          <button className="button-previous" style={{width:'50px'}} type="button" onClick={(e) => previous(e)}>Prev</button>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <li className="number" key={number}>
            <button className="number" style={{width:'30px'}} onClick={() => paginado(number)}>{number}</button>
          </li>
        ))}
        <button className="button-next" style={{width:'50px'}} type="button" onClick={(e) => next(e)}>Next</button>
      </ul> </div> : 
      <div className="cargando">Cargando...</div>
      }
       
  </nav>
  );
}