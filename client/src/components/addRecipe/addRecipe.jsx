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
        <div className="global">
            <form /*encType="multipart/form-data"*/ className="form-new-recipe" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    
                    <h1>Add recipe</h1>
                </div>
                <div className='allInputs'>
                <div className="inputsNames">
                    <label htmlFor="name">Name</label>
                    <input className="inputsArea" autoComplete="off" type="text" name="name" id="name" value={form.name} onChange={(e) => handleChange(e)} />
                </div>
                <div className="inputsNames">
                    <label htmlFor="summary">Summary</label>
                    <textarea className="inputsArea" name="summary" id="summary" value={form.summary} onChange={(e) => handleChange(e)} />
                </div>
                <div className="inputsNames">
                    <label htmlFor="score">Score</label>
                    <input
                    className="inputsArea"
                    name="score"
                    id="score"
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    size="6"
                    value={form.score}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="inputsNames">
                    <label htmlFor="healthScore">Health Score</label>
                    <input
                    className="inputsArea"
                    name="healthScore"
                    id="healthScore"
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    size="6"
                    value={form.healthScore}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="inputsNames">
                    <label htmlFor="image">Image</label>
                    <input
                    className="inputsArea"
                    name="image"
                    id="image"
                    type="text"
                    // ref={ref}
                    value={form.image}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="inputsNames">
                    <label htmlFor="steps">Steps</label>
                    <textarea
                    className="inputsArea"
                    name="steps"
                    id="steps"
                    type="text"
                    value={form.steps}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                </div>
                <div className='checkBoxs'>
                    {
                        diets.map(diet => { 
                            return <div>
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
                    <button className="button-submit" type="submit">Submit Recipe</button>
                </div>
            </form>
        </div>
    )
        
    
}