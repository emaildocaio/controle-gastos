import { func } from 'prop-types';
import React, { useEffect, useState } from 'react';
import instanciaAxios from './ajax/instanciaAxios';
import './css/FormInput.css';
import despertador from './images/bin.png'



const FormInput = (props) => {

    const [listaCategorias, setListaCategorias] = useState([]);
    const [listaMeios, setListaMeios] = useState([]);
    const [listaMoedas, setListaMoedas] = useState([]);
    const [listaCotacao, setListaCotacao] = useState([]);
    const [novoItem, setNovoItem] = useState({})
    
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
        } catch (error) {
            console.log(error.message)
        }
    };
    
    const pegarMoedas = async () => {
        try {
            const resposta = await instanciaAxios.get('../json/moedas.json')
            setListaMoedas(resposta.data.moedas)
        } catch(error){
            console.log(error.message)
        }
    };

    const categoriaGasto = listaCategorias.find( item => {
        return item.id === listaCategorias.idCategoria;
    });

    const meioGasto = listaMeios.find( item => {
        return item.id === listaMeios.idMeio;
    })

    const moedaGasto = listaMoedas.find( item => {
        return item.id === listaMoedas.idMoeda;
    })

    

    useEffect(()=> {
        pegarCategorias();
        pegarMeios();
        pegarMoedas();
        pegarCotacao();
    }, []);

    

    const OpcoesCategoriasComponente = () => {
        const listaCategoriaJSX = listaCategorias.map( (item ) => {
            return (
                <option key={ item.id } value={ item.id }>{item.descricao}</option>
            );
        });
        return listaCategoriaJSX;
    }

    const OpcoesMeiosComponente = () => {
        const listaMeiosJSX = listaMeios.map( (item ) => {

            return (
            <div key= {item.id}>
                <input type="radio" value={item.id} name="meio" checked={ item.id === props.meioNovoItem } id= {item.htmlfor} onChange = { (evento) => props.setMeioNovoItem(evento.currentTarget.value) }/>
                <label value={item.id} htmlFor= {item.htmlfor}> {item.rotulo} </label>
            </div>
           
            );
        });
        return listaMeiosJSX;
    }

    const OpcoesMoedasComponente = () => {
        const listaMoedasJSX = listaMoedas.map( (item) => {
            return (
                <option value = {item.id} key = {item.id }>{item.codigo}</option>
            );
        });
        return listaMoedasJSX;
    }

    const conversaoMoeda = () => {
        if (props.moedaNovoItem === "3"){
            return parseFloat(props.valorNovoItem) * parseFloat(listaCotacao.EURBRL.bid)
        } else if (props.moedaNovoItem === "2"){
            return parseFloat(props.valorNovoItem) * parseFloat(listaCotacao.USDBRL.bid)
        } else if (props.moedaNovoItem === "4"){
            return parseFloat(props.valorNovoItem) * parseFloat(listaCotacao.THBBRL.bid)
        } else {
            return parseFloat(props.valorNovoItem);
        }
    }


    const incluirItem = (event) => {

        event.preventDefault();


        let idUltimoElemento = "0";

        if (props.listaTabela.length){
            const indiceUltimoElemento = props.listaTabela.length - 1;
            const ultimoElemento = props.listaTabela[ indiceUltimoElemento ];
            idUltimoElemento = ultimoElemento.id;
        }

        const NovoItemId = parseInt( idUltimoElemento ) + 1;


        const novoItem = {
            "id": NovoItemId.toString(),
            "descricao": props.descricaoNovoItem,
            "idMeio": props.meioNovoItem,
            "idCategoria": props.categoriaNovoItem,
            "data": props.dataNovoItem,
            "idMoeda": props.moedaNovoItem,
            "valor": conversaoMoeda(),
            "alerta": props.alertaNovoItem
        };

        props.setListaTabela( [...props.listaTabela, novoItem ]);

        
        limparCampo();
    }

    function limparCampo() {
        props.setValorNovoItem("");
        props.setDescricaoNovoItem("");
        props.setMoedaNovoItem("");
        props.setCategoriaNovoItem("");
        props.setMeioNovoItem("");
        props.setDataNovoItem("");
    }

    const valorReal = () => {
        if (props.moedaNovoItem === "2"){
            return (<p>O valor do Dólar agora é R${parseFloat(listaCotacao.USDBRL.bid).toFixed(2).replace('.', ',')}</p>)
        } else if (props.moedaNovoItem === "3") {
            return (<p>O valor do Euro agora é R${parseFloat(listaCotacao.EURBRL.bid).toFixed(2).replace('.', ',')}</p>)
        } else if (props.moedaNovoItem === "4"){
            return (<p>O valor do Baht agora é R${parseFloat(listaCotacao.THBBRL.bid).toFixed(2).replace('.', ',')}</p>)
        } else {
        }
    }
   

    return (
        <div> 
            <form className="formInput" onSubmit = { incluirItem } id="myForm">
            <div>
                    <div className="primeira linha">
                    <div>
                        <select id="moeda" value = {props.moedaNovoItem } onChange = { (evento) => props.setMoedaNovoItem(evento.target.value) }>
                            <OpcoesMoedasComponente/>
                        </select>                        
                    </div>
                    <div>
                        <input type="number" value= {props.valorNovoItem } placeholder="0,00" onChange = { (evento) => props.setValorNovoItem(evento.target.value) }></input>
                    </div>
                    </div>
                    <div className="conversao">{valorReal()}</div>
                </div>

                <div className="segunda linha">
                    <label>Descrição</label>
                    <input name="descricao" value= { props.descricaoNovoItem} type="text" required onChange = { (evento)=> {props.setDescricaoNovoItem(evento.target.value)}}></input>
                    
                </div>
                <div className="select-size terceira linha">
                        <OpcoesMeiosComponente/> 
                </div>

                <div className="quarta linha">
                    <div>
                        <select className="categoria" value={ props.categoriaNovoItem} onChange = { (evento) => props.setCategoriaNovoItem(evento.target.value) }>
                            <option value="" disabled selected name>Selecione uma Categoria</option>
                            <OpcoesCategoriasComponente/>
                        </select>
                    </div>
                    <div>
                        <label>Data</label>
                        <input type="date" placeholder="" value = { props.dataNovoItem } onChange = { (evento) => props.setDataNovoItem(evento.target.value) }></input>
                    </div>
                </div>
                <div className="quinta linha">
                    <input type="checkbox" id="campo-alerta" name="campo-alerta" onChange = { () => { props.setAlertaNovoItem(props.alertaNovoItem === 'ligado' ? 'desligado' : 'ligado')}}></input>
                    
                    <label>Emergêncial?</label>
                </div>
                <div className="sexta linha">
                <input type="submit" value="Adicionar Gasto" className="botao-add"></input>
                {/* <button type="button" className= "botao-clear" onClick= { limparCampo()}>Limpar</button> */}
                </div>
            </form>
        </div> 
    )
}

export default FormInput;
