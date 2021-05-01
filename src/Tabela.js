import React, { useState } from 'react';
import './css/Tabela.css';

const tabela = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Dia</th>
                    <th>Turno</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Descrição teste</td>
                    <td>Categoria teste</td>
                    <td>Dia teste</td>
                    <td>Turno teste</td>
                    <td>Ações teste</td>
                </tr>
                <tr>
                    <td>Descrição teste 2</td>
                    <td>Categoria teste 2</td>
                    <td>Dia teste 2</td>
                    <td>Turno teste 2</td>
                    <td>Ações teste 2</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="5">Total de Itens 999</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default tabela;