import React, { useState } from 'react';

import Card from '../UI/Card';

import styles from './SearchCep.module.css';

const SearchCep = (props) => {
    const [inputCEP, setInputCEP] = useState('');

    const changeCEP= (event) => {
        setInputCEP(event.target.value);
    }

    const buscarCEP = async () => {
        const urlAPI = `https://viacep.com.br/ws/${inputCEP}/json/`

        if (inputCEP === 0 || inputCEP.length < 8) {
            alert("O campo CEP deve ser preenchido corretamente.")
            setInputCEP(0)
            return
        }

        const data = await fetch(urlAPI)

        if (!data) {
            alert("O CEP fornecido não existe ou está incorreto.")
            setInputCEP(0)
            return
        }

        const adress = await data.json()
        
        return {adress}
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        const adressCEP = await buscarCEP()

        const dataCEP = {
            id: adressCEP.adress.cep,
            logradouro: adressCEP.adress.logradouro,
            bairro: adressCEP.adress.bairro,
            complemento: adressCEP.adress.complemento,
            ddd: adressCEP.adress.ddd,
            gia: adressCEP.adress.gia,
            ibge: adressCEP.adress.ibge,
            localidade: adressCEP.adress.localidade,
            siafi: adressCEP.adress.siafi,
            uf: adressCEP.adress.uf
        }
        await props.onGetCEP(dataCEP)
        setInputCEP(0);
    }

    return (
        <>
            <Card className={styles.form_cep}> 
                <form onSubmit={submitHandler}>
                    <label for="cep">CEP <a>(apenas números)</a></label>
                    <input 
                        id="cep" 
                        type="number" 
                        value={inputCEP} 
                        onChange={changeCEP} 
                    />
                    <button className={styles.form_cep_btn}>Buscar</button>
                </form>
            </Card>
        </>
    )
}

export default SearchCep;
