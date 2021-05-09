import React, { useEffect, useState } from 'react';
import './css/Tabela.css';
import instanciaAxios from './ajax/instanciaAxios'

const CorpoTabelaComponente = (props) => {
    return (
        <tbody>
            { props.listaTabela.map((item) => {
                 return (
                   <LinhaTabelaComponente 
                    descricao = {item.descricao} 
                    idMeio = {item.idMeio}
                    idCategoria = {item.idCategoria}
                    data = {item.data}
                    idMoeda = {item.idMoeda}
                    valor = {item.valor}
                    />

                 )
            }) }   
        </tbody>
        
    );
}

const LinhaTabelaComponente = (props) => {
    
    const [listaCategorias, setListaCategorias] = useState([]);
    const [listaMeios, setListaMeios] = useState([]);
    const [listaMoedas, setListaMoedas] = useState([])
    

    const pegarCategorias = async () => {
        try {
            const resposta = await instanciaAxios.get('../json/categorias.json')
            setListaCategorias(resposta.data.categorias);
        } catch(error) {
            console.log(error.message)
        }
    }; 

    const pegarMeios = async () => {
        try {
            const resposta = await instanciaAxios.get('../json/meios.json')
            setListaMeios(resposta.data.meios)
        } catch(error) {
            console.log(error.message)
        }
    }

    const pegarMoedas = async () => {
        try {
            const resposta = await instanciaAxios.get('../json/moedas.json')
            setListaMoedas(resposta.data.moedas)
        } catch(error) {
            console.log(error.message)
        }
    };

    const categoriaGasto = listaCategorias.find( item => {
        return item.id === props.idCategoria;
    });

    const meioGasto = listaMeios.find( item => {
        return item.id === props.idMeio;
    });

    const moedaGasto = listaMoedas.find( item => {
        return item.id === props.idMoeda;
    });
        
  

    useEffect(()=> {
        pegarCategorias();
        pegarMeios();
        pegarMoedas();
    }, []);



    return (
        <>
            <tr>
                <td>{props.descricao}</td>
                <td>{meioGasto ? meioGasto.rotulo : ""}</td>
                <td>{categoriaGasto ? categoriaGasto.descricao : ""}</td>
                <td>{props.data}</td>
                <td>{moedaGasto ? moedaGasto.rotulo : ""}</td>
                <td>{props.valor.toFixed(2)}</td>
            </tr>
        </>
    )
}

export default CorpoTabelaComponente;