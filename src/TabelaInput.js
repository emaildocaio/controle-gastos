import React, { useEffect, useState } from 'react';
import './css/Tabela.css';
import instanciaAxios from './ajax/instanciaAxios'
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
                </tr>
            </thead>
                <CorpoTabelaComponente 
                listaTabela = {props.listaTabela}
                setListaTabela = {props.setListaTabela}
                descricaoNovoItem = { props.descricaoNovoItem } 
                categoriaNovoItem = { props.categoriaNovoItem }
                />
            <tfoot>
                <tr>
                    <td colSpan="6">Total em Reais: $170,00</td>
                </tr>
            </tfoot>
        </table>

    )
}

export default TabelaInput;