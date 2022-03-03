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
        <div>
               <p>{page} of {maxPage}</p>
               <button className="button-previous" type="button" onClick={(e) => previous(e)}>Previous Page</button>
               <button className="button-next" type="button" onClick={(e) => next(e)}>Next Page</button>
        </div>
      <ul className="paginado" style={{padding: 0}}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className="number" key={number}>
              <button className="number" onClick={() => paginado(number)}>{number}</button>
            </li>
          ))}
      </ul>
  </nav>
  );
}