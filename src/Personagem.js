import riso from './images/personagem/riso.png'
import './css/Personagem.css';

const personagem = () => {
    return (
        <img src={riso} className="personagem" alt="personagem de óculos que sorri"></img>
    )
    
};

export default personagem;