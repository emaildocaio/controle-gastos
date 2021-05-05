import './css/App.css';
import FormInput from './FormInput';
import Personagem from './Personagem';
import TabelaInput from './TabelaInput';


function App() {
  return (
    <div className="App">
     
      <div className="tela">
        <section>
          <Personagem/>  
        </section>
        <section class="conteudo-app">
          <FormInput/>
          <TabelaInput/>
        </section>
      </div>
    </div>
  );
}

export default App;
