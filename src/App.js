import './css/App.css';
import React, { useEffect, useState } from 'react';
import FormInput from './FormInput';
import Personagem from './Personagem';
import TabelaInput from './TabelaInput';
import instanciaAxios from './ajax/instanciaAxios'



function App() {

  const [descricaoNovoItem, setDescricaoNovoItem] = useState('');
  const [categoriaNovoItem, setCategoriaNovoItem ] = useState('')
  const [moedaNovoItem, setMoedaNovoItem ] = useState('1')
  const [meioNovoItem, setMeioNovoItem] = useState('')
  const [dataNovoItem, setDataNovoItem] = useState('')
  const [valorNovoItem, setValorNovoItem] = useState('')
  const [alertaNovoItem, setAlertaNovoItem] = useState('desligado') 

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
          <Personagem
            valorNovoItem = { valorNovoItem }
          />  
        </section>
        <section class="conteudo-app">
          <FormInput 
            moedaNovoItem = { moedaNovoItem }
            setMoedaNovoItem = { setMoedaNovoItem }

            valorNovoItem = { valorNovoItem }
            setValorNovoItem = { setValorNovoItem }

            descricaoNovoItem = { descricaoNovoItem }
            setDescricaoNovoItem = {setDescricaoNovoItem }

            meioNovoItem = { meioNovoItem }
            setMeioNovoItem = { setMeioNovoItem } 

            categoriaNovoItem = { categoriaNovoItem }
            setCategoriaNovoItem = { setCategoriaNovoItem }

            dataNovoItem = { dataNovoItem }
            setDataNovoItem = { setDataNovoItem }

            listaTabela = { listaTabela}
            setListaTabela = { setListaTabela }

            alertaNovoItem = { alertaNovoItem }
            setAlertaNovoItem = {setAlertaNovoItem}
            />
          <TabelaInput
            moedaNovoItem = { moedaNovoItem }
            valorNovoItem = { valorNovoItem }
            descricaoNovoItem = { descricaoNovoItem }
            meioNovoItem = { meioNovoItem } 
            categoriaNovoItem = { categoriaNovoItem }
            dataNovoItem = { dataNovoItem }

            listaTabela = { listaTabela}
            setListaTabela = { setListaTabela}
           />
        </section>
      </div>
    </div>
  );
}

export default App;
