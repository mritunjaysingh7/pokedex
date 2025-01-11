import './Pokemon.css'
import Neww from "../Neww/Neww";
import usePokemonList from "../Hooks/usePOkemonList";

function Pokemon(){
    
   
   const [pokemonListState,setPokemonListState]=usePokemonList('https://pokeapi.co/api/v2/pokemon',false)
return (
    <div className="pokemon-list-wrapper">
    <div className="pokemon-wrapper">
    {(pokemonListState.isDownloading)?"Data Loading...":
        pokemonListState.pokemonList.map((p=><Neww name={p.name}  image={p.image} key={p.id} id={p.id}/>))}
    </div>
    <div className="controls">
        <button disabled={pokemonListState.previousUrl==null} onClick={()=>setPokemonListState({...pokemonListState,pokemonUrl:pokemonListState.previousUrl})}>Previous</button>
        <button disabled={pokemonListState.nextUrl==null} onClick={()=>setPokemonListState({...pokemonListState,pokemonUrl:pokemonListState.nextUrl})} >Next</button>
    </div>
    </div>
)
}
export default Pokemon;