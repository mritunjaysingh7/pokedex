import Search from "../Search/Search";
import Pokemon from "../PokemomList/Pokemon";
import './Pokedex.css';
function Pokedex(){
return (
    <div className='pokedex-wrapper'>
    
       <Search/>
       <Pokemon/>
    </div>
)
}
export default Pokedex;