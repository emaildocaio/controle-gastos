import logo from './logo.svg';
import './css/App.css';
import FormInput from './FormInput';
import Personagem from './Personagem';
import Tabela from './Tabela';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="tela">
        <section>
            <FormInput/>
            <Personagem/>
          </section>
          <section>
            <Tabela/>
          </section>
        </div>
    </div>
  );
}

export default App;
