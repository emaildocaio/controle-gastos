[parte 1]
import React, { useEffect, useState } from 'react';

import instanciaAxios from './ajax/instanciaAxios';

const ListaTarefas = () => {

    const [listaCategorias, setListaCategorias] = useState([]);

    const pegarCategorias = async () => {

        try {

            const resposta = await instanciaAxios.get('../json/categorias.json');
            
            setListaCategorias(resposta.data.categorias);

        }   catch (error) {
            console.log(error.message);
        }

    }; 

    useEffect (() => {
        pegarCategorias();
    }, []);

    const OpcoesCategoriasComponente = () => {

      const listaCategoriasJSX = listaCategorias.map( (item) => {
            return (
                <option>
                    { item.descricao }
                </option>
            );            
        } );

        return listaCategoriasJSX;
    }
Brunno Pessôa para Todos (9:25 PM)
[parte 2]

return (
    <> 
    
    {/* ReactFragment */}
    <label> Categorias: </label>
        <select>
            < OpcoesCategoriasComponente />
        </select>


    </>
        
    )
};

export default ListaTarefas;