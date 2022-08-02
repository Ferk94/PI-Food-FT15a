import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchRecipes, orderRecipes, filterRecipes, orderByScore, getRecipes, searchApiOrDb } from "../../actions/actions";
import "./searchBar.css";


export default function SearchBar(){

    const dispatch = useDispatch()
    const [title, setTitle] = useState("")

    useEffect(() => {
        dispatch(searchRecipes(""))
    }, [dispatch])


    function handleChange(e){
        setTitle(e.target.value)
    }

    function handleOrder(e){ 
        dispatch(orderRecipes(e.target.value))
    }

    function handleOrderByScore(e){
        dispatch(orderByScore(e.target.value))
    }

    function handlefilter(e){
        dispatch(filterRecipes(e.target.value))
        // setPage(1)
    }

    function handleSearchApiOrDb(e){
        if(e.target.value === 'api'){
            // dispatch(getRecipes())
            dispatch(searchApiOrDb('api'))
        }
        if(e.target.value === 'db'){
            // dispatch(getRecipes())
            dispatch(searchApiOrDb('db'))
        }
        
        if(e.target.value === 'all'){
            dispatch(getRecipes())
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(searchRecipes(title))
        document.getElementById('title').value = null;
    }

    function onReset(e){
        e.preventDefault();
        dispatch(getRecipes())
    }

    return <div className="searchBar">
       <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <div className="searchSelects">

           <div>
               <select id="order" name="order" onChange={(e) => handleOrder(e)}>
                   <option hidden>Order</option>
                   <option value="asc">Asc</option>
                   <option value="desc">Desc</option>
               </select>
           </div>
           <div>
             
               <select id="order-score" name="order-score" onChange={(e) => handleOrderByScore(e)}>
                    <option hidden>Score order</option>
                    <option value="min">Min</option>
                    <option value="max">Max</option> 
               </select>
           </div>
           <div>
               
               <select name="diet-filter" onChange={(e) => handlefilter(e)}>
                <option hidden>Select a diet</option>
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
           <div>
                
               <select name='apiOrDb' onChange={(e) => handleSearchApiOrDb(e)}>
                   <option hidden>Creation</option>
                   <option value='all'>All</option>
                   <option value='api'>Api Sponacular</option>
                   <option value='db'>DB</option>
               </select>
           </div>
        </div>
           <div className="searchBarAndReset">
           <div className="searchBarInput">
               <input
               type="text"
               id="title"
               name='title'
               autoComplete="off"
               value={title.title}
               onChange={(e) => handleChange(e)}
               />
            <button className="button-search" type="submit">Search</button>
           </div>
           <div>
               <button className='button-reset' onClick={(e) => onReset(e)}>Reset</button>
           </div>
           </div>
       </form>
    </div>
}