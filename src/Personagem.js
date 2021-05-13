import riso from './images/personagem/riso.png'
import blaze from './images/personagem/blaze.png'
import gargalhada from './images/personagem/gargalhada.png'
import raiva from './images/personagem/raiva.png'
import './css/Personagem.css';

const personagem = (props) => {
    return (
            <img src={riso} className="personagem" alt="personagem de óculos que sorri"></img>
    )
    
};

export default personagem;