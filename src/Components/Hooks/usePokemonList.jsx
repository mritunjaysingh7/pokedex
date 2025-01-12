import { useState, useEffect } from "react";
import axios from "axios";
function usePokemonList() {
    // const [pokemonList,setPokemonList]=useState([])
    // const [isDownloading,setDataDownloaded]=useState(true)
    // const [pokemonUrl,setPokemonUrl]=useState('https://pokeapi.co/api/v2/pokemon')
    // const [previousUrl,setPreviousUrl]=useState('');
    // const [nextUrl,setNextUrl]=useState('');
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isDownloading: true,
        pokemonUrl: 'https://pokeapi.co/api/v2/pokemon',
        previousUrl: '',
        nextUrl: ''
    })
    async function data() {
        // setDataDownloaded(true)
        setPokemonListState((state) => ({
            ...state, isDownloading: true
        }))
        const response = await axios.get(pokemonListState.pokemonUrl);
        const res = response.data.results
        // console.log("tttt",response)
        console.log("list is", response.data.pokemon)
        setPokemonListState((state) => ({
            ...state,
            previousUrl: response.data.previous,
            nextUrl: response.data.next

        }))
        // setPreviousUrl(res.previous)
        // setNextUrl(res.next)
        // console.log(nextUrl)
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
            isDownloading: false
        }));
        // setPokemonList(resul)
        // setDataDownloaded(false)
    }
    useEffect(
        () => {
            data()
        }, [pokemonListState.pokemonUrl]
    )
    return [pokemonListState, setPokemonListState]
}
export default usePokemonList;