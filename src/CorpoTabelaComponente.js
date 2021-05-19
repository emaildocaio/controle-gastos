import React, { useEffect, useState } from 'react';
import './css/Tabela.css';
import instanciaAxios from './ajax/instanciaAxios'
import iconeBin from './images/bin2.png'
import alarm from './images/alarm.png'

const CorpoTabelaComponente = (props) => {
    return (
        <tbody>
            { props.listaTabela.map((item) => {
                 return (
                   <LinhaTabelaComponente 
                    id = {item.id}
                    descricao = {item.descricao} 
                    idMeio = {item.idMeio}
                    idCategoria = {item.idCategoria}
                    data = {item.data}
                    idMoeda = {item.idMoeda}
                    valor = {item.valor}
                    alerta = {item.alerta}
                    listaTabela = {props.listaTabela}
                    setListaTabela = { props.setListaTabela }
                    />

                 )
            }) }

        </tbody>
        
    );
}

const LinhaTabelaComponente = (props) => {
    
    const [listaCategorias, setListaCategorias] = useState([]);
    const [listaMeios, setListaMeios] = useState([]);
    const [listaMoedas, setListaMoedas] = useState([]);
    const [listaCotacao, setListaCotacao] = useState([]);
    
    const pegarCotacao = async () => {
        try {
            const resposta = await instanciaAxios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,THB-BRL')
            setListaCotacao(resposta.data);
        } catch(error) {
            console.log(error.message)
        }
    }; 






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

    const removerItem = (idSelecionado) => {
        console.log(`O id selecionado foi: ${idSelecionado}`)

        const _listaTabela = props.listaTabela.filter((item) => {
            return item.id !== idSelecionado;
        })
        props.setListaTabela(_listaTabela);
    }
        
    const AlertaIconeComponente = () => {
        return (
            <img src={alarm} style={{paddingLeft: '25px', width: '16px', height: 'auto'}}/>
        )
    }

    useEffect(()=> {
        pegarCategorias();
        pegarMeios();
        pegarMoedas();
        pegarCotacao();
    }, []);



    return (
        <>
            <tr>
                <td>{props.descricao}
                {props.alerta === "ligado" ? <AlertaIconeComponente/> : null}
                </td>
                <td>{meioGasto ? meioGasto.rotulo : ""}</td>
                <td>{categoriaGasto ? categoriaGasto.descricao : ""}</td>
                <td>{props.data}</td>
                <td>R$ {props.valor.toFixed(2)}</td>
                <td><img src={iconeBin} style={{width: '20px', height: 'auto'}} onClick={ () => { removerItem(props.id)}}/></td>
            </tr>
        </>
    )
}

export default CorpoTabelaComponente;