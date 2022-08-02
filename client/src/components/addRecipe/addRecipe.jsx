import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constantes";
import "./addRecipe.css";



export default function AddRecipe(){
    // console.log(props)

    const initial = {
        name: "",
        summary: "",
        score: 50,
        healthScore: 50,
        image: "",
        steps: "",
        diets:[]
    }

    const [form, setForm] = useState(initial)

    const [diets, setDiets] = useState([])

    
        

    // const ref = useRef()
    
    function getDiets(){
        axios.get(`${BASE_URL}diets/`)
        .then(response => {
            setDiets(response.data)
        })
    }
    
    useEffect(() => {
        getDiets()
    }, [])

    console.log(form)
    
    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
        // console.log(ref.current.files[0]) 
    }

    function AddDietsToRecipe(id){
        
        setForm({
            ...form,
            diets: [...form.diets, id]
        })
        
    }


    function handleSubmit(e){
        e.preventDefault();
        axios.post(`${BASE_URL}recipe/`, form)
        .then(response => {
            console.log(response)
            alert("Se agrego la receta")
        })
        .catch(err => {
            console.log(err)
            console.log("Hubo un error en el posteo")
        })
        setForm(initial)
    }

    return (
        <div className="createContainer">
            <form /*encType="multipart/form-data"*/ className="createForm" onSubmit={(e) => handleSubmit(e)}>
                <div className="createTitle">
                    Create a recipe!
                </div>
                <div className='allInputs'>
                <div className="nameImg">

                <div className="inputsNames">
                    <div htmlFor="name">Name</div>
                    <input className="inputsArea" style={{outline: 'none'}} autoComplete="off" type="text" name="name" id="name" value={form.name} onChange={(e) => handleChange(e)} />
                </div>
                <div className="inputsNames">
                    <div htmlFor="image">Image</div>
                    <input
                    className="inputsArea"
                    name="image"
                    style={{outline: 'none'}}
                    id="image"
                    type="text"
                    // ref={ref}
                    value={form.image}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                </div>
                <div className="bigTexts">

                <div className="inputsNames">
                    <div htmlFor="summary">Summary</div>
                    <textarea className="inputsArea" style={{outline: 'none'}} name="summary" id="summary" value={form.summary} onChange={(e) => handleChange(e)} />
                </div>
                <div className="inputsNames">
                    <div htmlFor="steps">Steps</div>
                    <textarea
                    style={{outline: 'none'}}
                    className="inputsArea"
                    name="steps"
                    id="steps"
                    type="text"
                    value={form.steps}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                </div>
                <div className="numericInputs">

                <div className="numeric">
                    <div htmlFor="score">Score</div>
                    <input
                    className="inputsArea"
                    name="score"
                    id="score"
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    size="4"
                    value={form.score}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                
                <div className="numeric">
                    <div htmlFor="healthScore">Health Score</div>
                    <input
                    className="inputsArea"
                    name="healthScore"
                    id="healthScore"
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    size="4"
                    value={form.healthScore}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
               
                </div>
               
                </div>
                <div className='createChecks'>
                    {
                        diets.map(diet => { 
                            return <div className="createCheck">
                                <div className="diets">
                                {diet.name}
                                </div>
                                <input
                                type="checkbox"
                                onChange={() => AddDietsToRecipe(diet.id)}>
                                    
                                </input>
                            </div>
                        })
                    }
                </div>
                <div>
                    <button className="createButton" type="submit">Submit Recipe</button>
                </div>
            </form>
        </div>
    )
        
    
}