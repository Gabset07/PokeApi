import React, { useState, useEffect } from "react";
import"./pokemon.css"




async function getPokemon() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=50';
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

const RenderPokemon = () =>{
    const [pokemonLista , setpokemonLista] = useState([]);

    useEffect(() => {
        const FetchPokemonData = async () =>{
          const results = await getPokemon();   
          
          const ListaDetalhada = await Promise.all(
            results.map( async (pokemon) => {
               const response = await fetch(pokemon.url)
               const data = await response.json();
               return data 
            }) 
          )
          setpokemonLista(ListaDetalhada);
        }
        FetchPokemonData()
    },[])

    return(
        <div >
            <ul  className="Pokemons">
                {pokemonLista.map((pokemon , index) => (
                    <li className="pokemon-itens" key={index}>
                     <h2 className="name">{pokemon.name}</h2>
                     <p className="weight">{pokemon.weight}</p>
                     <p className="type">{pokemon.types.map((type) => type.type.names).join(", ")}</p>
                     <img className="img" src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default RenderPokemon