import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchRecipes, orderRecipes, filterRecipes } from "../../actions/actions";
import Recipe from "../home/recipe";
import "./searchBar.css";


    let notResults = "the current search does not return results"

export default function SearchBar(){


    let initialPage = 1;
    let maxPage;
    let showedRecipes = [];

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchRecipes(""))
    }, [dispatch])


    const [title, setTitle] = useState("")
    const [page, setPage] = useState(initialPage)

    const foundRecipes = useSelector(state => state.foundRecipes)
    const filteredRecipes = useSelector(state => state.filteredRecipes)

    maxPage = Math.ceil(filteredRecipes.length / 9)

    function handleChange(e){
        setTitle(e.target.value)
    }

    function handleNext(e){
        if(page < maxPage){
            setPage(page + 1)
        }
    }

    function handlePrevious(e){
        if(page > 1){
            setPage(page - 1)
        }
    }

    function handleOrder(e){
        dispatch(orderRecipes(e.target.value))
    }

    function handlefilter(e){
        dispatch(filterRecipes(e.target.value))
        setPage(1)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(searchRecipes(title))
    }

    showedRecipes = filteredRecipes.slice((page -1)*9, page*9)

    if(foundRecipes.length === 0){
         notResults = "the current search does not return results"
    }else{
         notResults = ""
    }

    return <div className="searchBar">
       <h1>{notResults}</h1>
       <form onSubmit={(e) => handleSubmit(e)}>
           <div>
               <input
               type="text"
               id="title"
               autoComplete="off"
               value={title.title}
               onChange={(e) => handleChange(e)}
               />
            <button type="submit">Search</button>
           </div>
           <div>
               <button type="button" onClick={(e) => handlePrevious(e)}>Previous Page</button>
               <button type="button" onClick={(e) => handleNext(e)}>Next Page</button>
               <p>{page} de {maxPage}</p>
           </div>
           <div>
               <label htmlFor="order">Order</label>
               <select id="order" name="order" onChange={(e) => handleOrder(e)}>
                   <option value="-">-</option>
                   <option value="asc">Asc</option>
                   <option value="desc">Desc</option>
               </select>
           </div>
           <div>
               <label htmlFor="diet-filter">Diets</label>
               <select name="diet-filter" onChange={(e) => handlefilter(e)}>
                <option value="all diets">Everyone</option>
                <option value="dairy free">Dairy free</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="gluten free">Gluten free</option>
                <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="pescatarian">Pescetarian</option>
                <option value="paleolithic">Paleolithic</option>
                <option value="primal">Primal</option>
                <option value="whole 30">Whole 30</option> 
               </select>
           </div>
       </form>
       <ul>
           {
               showedRecipes.map((recipe, index) =>{
                return   <div key={index}>
                       <Recipe
                       name={recipe.name || recipe.title}
                       image={recipe.image}
                       id={recipe.id}
                       diets={recipe.diets} 
                       />
                       {/* <Link to={`/recipes/${recipe.id}`}><button>Detail</button></Link> */}
                   </div>
               })
           }
       </ul>
    </div>
}