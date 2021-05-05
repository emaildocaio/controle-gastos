import React, { useEffect, useState } from 'react';
import './css/Tabela.css';
import instanciaAxios from './ajax/instanciaAxios'

const TabelaInput = () => {
    
    const pegarTabela = async () => {

        try{
            const resposta = await instanciaAxios.get('../json/tabela.json')
            setListaTabela(resposta.data.registro)
            

        } catch(error) {
            console.log(error.message)
        }
    };

    const [listaTabela, setListaTabela] = useState([]);

    useEffect(() => {
        pegarTabela();
    },[])

    const RegistroTabelaComponente = () => {
        const listaRegistroJSX = listaTabela.map((item) => {
            return (
                <tr>
                    <td>{item.descricao}</td>
                    <td>{item.idMeio}</td>
                    <td>{item.idCategoria}</td>
                    <td>{item.data}</td>
                    <td>{item.idMoeda}</td>
                    <td>{item.valor.toFixed(2)}</td>
                </tr>
            );
        });
        return listaRegistroJSX;
    }

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
            <tbody>
                <RegistroTabelaComponente/>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="6">Total em Reais: $170,00</td>
                </tr>
                <tr>
                    <td colSpan="6">Total em Dólar: $199,00</td>
                </tr>
                <tr>
                    <td colSpan="6">Total em Euro: $130,00</td>
                </tr>
            </tfoot>
        </table>

    )
}

export default TabelaInput;