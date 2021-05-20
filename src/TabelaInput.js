import React from 'react';
import './css/Tabela.css';
import CorpoTabelaComponente from './CorpoTabelaComponente'

const TabelaInput = (props) => {

    let valorSomado = 0
    const ValorTotal = props.listaTabela.map( (item) => {
        valorSomado += parseFloat(item.valor)
    })
   
    return (
        <table class="tabela-estilo">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Meio</th>
                    <th>Categoria</th>
                    <th>Data</th>
                    <th>Valor em R$</th>
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
                    <td colSpan="6">O valor total gasto em reais é: R$ ${valorSomado.toFixed(2)}</td>
                </tr>
            </tfoot>
        </table>

    )
}

export default TabelaInput;