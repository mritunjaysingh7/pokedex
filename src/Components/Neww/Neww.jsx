import './Neww.css'
import { Link } from 'react-router-dom'
function Neww ({name,image,id}){
    return (
        <div className='pokemon'>
        <Link to={`pokemon/${id}`}>
            <div>
                {name}
            </div>
            <div><img className='pokemon-image' src={image} alt={name} /></div>
            </Link>
        </div>
    )

}
export default Neww