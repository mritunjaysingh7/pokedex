import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import usePokemonList from "../Hooks/usePOkemonList";


function PokemonDetails() {
    let { id } = useParams();
    const [pokemonData, setPokemonData] = useState({});
    
    async function downloadData() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const result = response.data;
        setPokemonData({
            name:result.name,
            image: result.sprites.other.dream_world.front_default,
            height: result.height,
            weight: result.weight,
            types: result.types.map(type => type.type.name)
        });
    }
    
    const [pokemonListState]=usePokemonList('https://pokeapi.co/api/v2/type/fire',true);

    useEffect(() => {
        downloadData();
    }, []);

    useEffect(() => {
        console.log(pokemonListState.pokemonList)
    }, [pokemonListState]);

    
    return (
        <div>
        <div>name:{pokemonData.name}</div>
        <img src={pokemonData.image}/>
        <div>Height:{pokemonData.height}</div>
        <div>Weight:{pokemonData.weight}</div>
        <div>Types:</div>
        {pokemonData.types && pokemonData.types.map((t)=>{ return <li key={t}>{t}</li>})}
        <div>
        More same type pokemon
            <ul>
                {pokemonListState.pokemonList.length > 0 && pokemonListState.pokemonList.map((p)=> <li key={p.pokemon.name}>{p.pokemon.name}</li>)}
            </ul>
        </div>
        </div>
        
    )
}
export default PokemonDetails