import React, { useState } from "react";
import JeuDe from "./components/JeuDe";
import './jeuDe.css'

export default function App(){
    const [cache,setCache]=useState(1)
    const [jouer,setJouer]=useState(false)

function handlerChange(event){
setCache(event.target.value)
}
function handlerClick(){
setJouer(true)
}
function initialiser(){
    setJouer(false)
}

    return(<div className="App" >
       {!jouer &&
       <div className="container">
        <h2 className="title">jeu de Dé Joueur 1 </h2>
            <label>donner le numero caché entre 1 et 6: {cache}</label>
            <input type="number" min="1" max="6" value={cache} onChange={handlerChange} />
        <input type="button" value="jouer" onClick={handlerClick}/>
        
        </div>} 
        {jouer && <JeuDe cache={cache}  initialiser={initialiser}/>}
        
    </div>)
}