import riso from './images/personagem/riso.png'
import blaze from './images/personagem/blaze.png'
import gargalhada from './images/personagem/gargalhada.png'
import raiva from './images/personagem/raiva.png'
import './css/Personagem.css';

const personagem = (props) => {
    if (props.valorNovoItem > 0 & props.valorNovoItem <= 100){
        return (<img src={gargalhada} className="personagem" alt="personagem de óculos que sorri"></img> )
    } else if (props.valorNovoItem > 100 && props.valorNovoItem < 300 ) {
        return (<img src={blaze} className="personagem" alt="personagem de óculos que sorri"></img>)
    } else if (props.valorNovoItem >= 300) {
        return ( <img src={raiva} className="personagem" alt="personagem de óculos que sorri"></img>)
    }

    return (
            <img src={riso} className="personagem" alt="personagem de óculos que sorri"></img>
    )
    
};

export default personagem;