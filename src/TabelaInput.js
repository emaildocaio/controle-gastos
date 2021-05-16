import React from 'react';
import './css/Tabela.css';
import CorpoTabelaComponente from './CorpoTabelaComponente'

const TabelaInput = (props) => {   
   
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
                    <th>Excluir</th>
                </tr>
            </thead>
                <CorpoTabelaComponente 
                listaTabela = {props.listaTabela}
                setListaTabela = {props.setListaTabela}
                moedaNovoItem = { props.moedaNovoItem}
                valorNovoItem = { props.valorNovoItem}
                descricaoNovoItem = { props.descricaoNovoItem } 
                meioNovoItem = {props.meioNovoItem}
                categoriaNovoItem = { props.categoriaNovoItem }
                dataNovoItem = {props.dataNovoItem }
                />
            <tfoot>
                <tr>
                    <td colSpan="6">Quantidade de itens: {props.listaTabela.length}</td>
                </tr>
            </tfoot>
        </table>

    )
}

export default TabelaInput;