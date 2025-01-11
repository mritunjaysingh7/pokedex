import './Search.css'
function Search() {
    return (
        <div className="search-wrapper">
           <input 
            id="pokemon-name-search"
           type='text'
           placeholder="pokedex search...."
           />
        </div>
    );
}
export default Search;