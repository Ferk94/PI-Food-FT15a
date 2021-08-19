import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import LandingPage from "./components/landingPage/landingpage"
import NavBar from "./components/navBar/navbar"
// import SearchBar from "./components/searchBar/searchBar"
import Home from "./components/home/home"
import RecipeDetail from "./components/detail/recipeDetail"
import AddRecipe from './components/addRecipe/addRecipe';
import About from "./components/about/about"


function App() { 
  return (
    <BrowserRouter>
     <div className="App">
      <Route  path="/recipes" component={NavBar} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/recipes" component={Home} />
      {/* <Route exact path="/search" component={SearchBar} /> */}
      <Route exact path="/recipes/addrecipe" component={AddRecipe} />
      <Route path="/recipes/:id" render = {({match}) => <RecipeDetail match={match}/> } /> 
      <Route path="/recipes/about" component={About} /> 
    </div>
    </BrowserRouter>
  );
}

export default App;
