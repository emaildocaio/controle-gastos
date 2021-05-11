import './css/App.css';
import React, { useEffect, useState } from 'react';
import FormInput from './FormInput';
import Personagem from './Personagem';
import TabelaInput from './TabelaInput';
import instanciaAxios from './ajax/instanciaAxios'



function App() {

  const [descricaoNovoItem, setDescricaoNovoItem] = useState('');
  const [categoriaNovoItem, setCategoriaNovoItem ] = useState('') 

  const [listaTabela, setListaTabela] = useState([]);

  const pegarTabela = async () => {

      try{
          const resposta = await instanciaAxios.get('../json/tabela.json')
          setListaTabela(resposta.data.registro)
          //console.log(listaTabela[0].descricao);
      } catch(error) {
          console.log(error.message)
      }
  };

  useEffect(() => {
      pegarTabela();
  },[])


  return (
    <div className="App">
     
      <div className="tela">
        <section>
          <Personagem/>  
        </section>
        <section class="conteudo-app">
          <FormInput 
            descricaoNovoItem = { descricaoNovoItem } 
            categoriaNovoItem = { categoriaNovoItem }
            setDescricaoNovoItem = {setDescricaoNovoItem }
            setCategoriaNovoItem = { setCategoriaNovoItem }
            listaTabela = { listaTabela}
            setListaTabela = { setListaTabela }
            />
          <TabelaInput
            descricaoNovoItem = { descricaoNovoItem } 
            categoriaNovoItem = { categoriaNovoItem }
            listaTabela = { listaTabela}
           />
        </section>
      </div>
    </div>
  );
}

export default App;
