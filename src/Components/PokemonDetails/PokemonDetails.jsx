import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import usePokemonList from "../Hooks/usePOkemonList";
import usePokemonDetails from "../Hooks/usePOkemonDetails";
function PokemonDetails() {
   
   const {id}=useParams();
    const [pokemonData]=usePokemonDetails(id)
    
       
    return (
        <div>
        <div>name:{pokemonData.name}</div>
        <img src={pokemonData.image}/>
        <div>Height:{pokemonData.height}</div>
        <div>Weight:{pokemonData.weight}</div>
        <div>Types:</div>
        {pokemonData.types && pokemonData.types.map((t)=>{ return <li key={t}>{t}</li>})}
        {pokemonData.types && pokemonData.similarType &&
        <div>
        MOre {pokemonData.types[0]} type pokemon
            <ul>
                {pokemonData.similarType.map((p)=> <li key={p.pokemon.url}>{p.pokemon.name}</li>)}
            </ul>
        </div>
        }
        </div>
        
    )
}
export default PokemonDetails