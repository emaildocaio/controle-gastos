import React, { useEffect, useState } from 'react';
import instanciaAxios from './ajax/instanciaAxios';
import './css/FormInput.css';


const FormInput = (props) => {

    const [listaCategorias, setListaCategorias] = useState([]);
    const [listaMeios, setListaMeios] = useState([]);
    const [listaMoedas, setListaMoedas] = useState([]);
 
    

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
                <label for= {item.htmlfor}> {item.rotulo} </label>
            );
        });
        return listaMeiosJSX;
    }

    const OpcoesMoedasComponente = () => {
        const listaMoedasJSX = listaMoedas.map( (item) => {
            return (
                <option key = {item.id }>{item.codigo}</option>
            );
        });
        return listaMoedasJSX;
    }

    const incluirItem = (event) => {
        // console.log(`Usuário escolheu a categoria ${props.categoriaNovoItem} e a descrição foi ${props.descricaoNovoItem}`)

        event.preventDefault();

        const novoItem = {
            "id": props.listaTabela.length.toString(),
            "descricao": props.descricaoNovoItem,
            "idCategoria": props.categoriaNovoItem
        };

        props.setListaTabela( [...props.listaTabela, novoItem ]);
    }

    return (
        <> 
            <form className="formInput" onSubmit = { incluirItem }>
                <div className="primeira linha">
                    <div>
                        <select id="moeda">
                            <OpcoesMoedasComponente/>
                        </select>
                    </div>
                    <div>
                        <input type="number" placeholder="0,00"></input>
                    </div>
                </div>

                <div className="segunda linha">
                    <label>Descrição</label>
                    <input value= { props.descricaoNovoItem } name="descricao" type="text" onChange = { (evento) => props.setDescricaoNovoItem(evento.target.value) } required></input>
                    {/* <p>{ descricaoNovoItem } </p> */}
                </div>
                <div className="select-size terceira linha">
                    <input type="radio" name="s-size" id="small"/>
                    <input type="radio" name="s-size" id="medium"/>
                    <input type="radio" name="s-size" id="large"/>
                    <input type="radio" name="s-size" id="x-large"/>
                    <input type="radio" name="s-size" id="xx-large"/>
                    
                    <OpcoesMeiosComponente/> 
                
                </div>

                <div className="quarta linha">
                    <div>
                        <select value = { props.categoriaNovoItem } className="categoria" onChange = { (evento) => props.setCategoriaNovoItem(evento.target.value) }>
                            <option value={ null } disabled selected>Selecione uma Categoria</option>
                            <OpcoesCategoriasComponente/>
                        </select>
                        {/* <p>{categoriaNovoItem}</p> */}
                    </div>
                    <div>
                        <label>Data</label>
                        <input type="date" placeholder=""></input>
                    </div>
                </div>
                <div className="quinta linha">
                    <input type="radio"></input>
                    <label>Emergêncial?</label>
                </div>
                <div className="sexta linha">
                <input type="submit" value="Adicionar Gasto" className="botao-add"></input>
                <input type="submit" value="Limpar" className="botao-clear"></input>
                </div>
            </form>
        </>
    )
}

export default FormInput;
