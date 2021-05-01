import React, { useState } from 'react';
import './css/FormInput.css';

//import instanciaAxios from './ajax/instanciaAxios';


const formInput = () => {
    return (
        <> 
            <form className="formInput">
                <div className="primeira linha">
                    <div>
                        <select id="moeda">
                            <option>BRL</option>
                            <option>USD</option>
                            <option>EUR</option>
                        </select>
                    </div>
                    <div>
                        <input type="number" placeholder="0,00"></input>
                    </div>
                </div>

                <div className="segunda linha">
                    <label>Descrição</label>
                    <input type="text"></input>
                </div>

                <div className="select-size terceira linha">
                    <input type="radio" name="s-size" id="small" checked/>
                    <input type="radio" name="s-size" id="medium" />
                    <input type="radio" name="s-size" id="large" />
                    <input type="radio" name="s-size" id="x-large" />
                    <input type="radio" name="s-size" id="xx-large" />

                    <label htmlFor="small">Dinheiro</label>
                    <label htmlFor="medium">Crédito</label>
                    <label htmlFor="large">Débito</label>
                    <label htmlFor="x-large">Outros</label>
                </div>

                <div className="quarta linha">
                    <div>
                        <select className="moeda">
                            <option value="" disabled selected>Selecione uma Categoria</option>
                            <option>Entretenimento</option>
                            <option>Acomodação</option>
                            <option>Alimentação</option>
                            <option>Transporte</option>
                            <option>Tours</option>
                        </select>
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

export default formInput;
