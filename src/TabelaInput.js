import React, { useEffect, useState } from 'react';
import './css/Tabela.css';
import instanciaAxios from './ajax/instanciaAxios'
import CorpoTabelaComponente from './CorpoTabelaComponente'

const TabelaInput = () => {
    
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
        <table class="tabela-estilo">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Meio</th>
                    <th>Categoria</th>
                    <th>Data</th>
                    <th>Moeda</th>
                    <th>Valor</th>
                </tr>
            </thead>
                <CorpoTabelaComponente listaTabela = {listaTabela}/>
            <tfoot>
                <tr>
                    <td colSpan="6">Total em Reais: $170,00</td>
                </tr>
            </tfoot>
        </table>

    )
}

export default TabelaInput;