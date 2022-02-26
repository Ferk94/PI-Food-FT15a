import "./paginate.css";
import React from "react";

export default function Paginate({ recipesPerPage, foundRecipes, paginado, previous, next, page, maxPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(foundRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }



  return (
    <nav className="paginacion">
        <div>
               <p>{page} de {maxPage}</p>
               <button className="button-previous" type="button" onClick={(e) => previous(e)}>Previous Page</button>
               <button className="button-next" type="button" onClick={(e) => next(e)}>Next Page</button>
        </div>
      <ul className="paginado" style={{padding: 0}}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className="number" key={number}>
              <button onClick={() => paginado(number)}>{number}</button>
            </li>
          ))}
      </ul>
  </nav>
  );
}