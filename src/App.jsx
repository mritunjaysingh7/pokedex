import CustoumRoutes from './Route/CustoumRoutes'
import { Link } from'react-router-dom'
import './App.css'
function App() {

  return (
    <div className='main-page'>
    <Link to='/'>
    <h1 id="pokedex-heading">Pokedex</h1>
    </Link>
     <CustoumRoutes/>
    </div>
  )
}

export default App
