// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import {getRecipes} from "../../actions/actions";
import SearchBar from "../searchBar/searchBar";
import "./home.css"

export default function Home () {

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getRecipes())
    // }, [dispatch])  

    return <div className="home">
        <SearchBar/> 
    </div>
} 