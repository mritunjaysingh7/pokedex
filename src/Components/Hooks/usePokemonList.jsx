import { useState, useEffect } from "react";
import axios from "axios";



function usePokemonList(url, isTypeURL = false) {

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isDownloading: true,
        pokemonUrl: url,
        previousUrl: '',
        nextUrl: ''
    });

    async function fetchData() {


        setPokemonListState((state) => ({
            ...state, 
            isDownloading: true
        }));

        const response = await axios.get(pokemonListState.pokemonUrl);

        // If the URl is to fetch specific type of pokemen url...
        if (isTypeURL) {

            const list = response.data.pokemon.slice(0, 5);

            setPokemonListState((state) => ({
                ...state,
                pokemonList: list,
                isDownloading: false
            }));

        }
        else {

            // FOr a simple pokemen list for the home PAGE

            const res = response.data.results;
            const newData = res.map((p) => axios.get(p.url))
            const pokeData = await axios.all(newData)


            const resul = pokeData.map((p) => {
                const actualData = p.data
                return {
                    id: actualData.id,
                    name: actualData.name,
                    image: (actualData.sprites.other) ? actualData.sprites.other.dream_world.front_default : actualData.sprites.back_shiny,
                    types: actualData.types
                }
            })

            setPokemonListState((state) => ({
                ...state,
                pokemonList: resul,
                previousUrl: response.data.previous,
                nextUrl: response.data.next,
                isDownloading: false
            }));
        }
    }

    useEffect(() => {
        fetchData();
    }, [pokemonListState.pokemonUrl])

    return [pokemonListState, setPokemonListState]
}

export default usePokemonList;