import React from "react"
import Pokebola from "../images/Pokebola.webp"
import "./topbar.css"

const Topbar = () =>{
    return (
        <header  className="fundo-pokemon">

          <h1 className="titulo">Pokedex</h1>

            <a href='#'>
                <img  src={Pokebola} className="pokemon-imagem" alt='Pokebola' />
            </a>

            
        </header>

        
    )
}

export default Topbar