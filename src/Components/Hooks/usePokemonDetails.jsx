import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePokemonList from "./usePOkemonList";

function usePokemonDetails(id) {
    const [pokemonData, setPokemonData] = useState({});
    async function downloadData() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        console.log("uuuu",response.data)
        const pokemonOfSameTypes=await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ""}`)
        console.log("pokemonOfSameTypes",pokemonOfSameTypes)
        setPokemonData({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            height: response.data.height,
            weight: response.data.weight,
            types: response.data.types.map(type => type.type.name),
            similarType:pokemonOfSameTypes.data.pokemon.slice(0,5)
        })

    }
    useEffect(() => {
        downloadData();
    }
        , [])
    return [pokemonData]
}
export default usePokemonDetails;