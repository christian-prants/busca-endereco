import React from 'react';

import styles from './ListCEP.module.css';

const ListCEP = (props) => {
    return (
        <ul className={styles.list_cep}>
            <div className={styles.header_table}>
                <h3>ENDEREÇOS</h3>
                <button onClick={props.onExport}>exportar</button>
            </div>
            
            <table>
                <tr>
                    <th>CEP</th>
                    <th>UF</th>
                    <th>Localidade</th>
                    <th>Bairro</th>
                    <th>Logradouro</th>
                    <th>Complemento</th>
                    <th>DDD</th>     
                    <th>SIAFI</th>                 
                </tr>
                {
                    Object.values(props.items).map((index) => {
                        const {bairro, complemento, ddd, gia, ibge, id, localidade, logradouro, siafi, uf} = index;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{uf}</td>
                                <td>{localidade}</td>
                                <td>{bairro}</td>
                                <td>{logradouro}</td>
                                <td>{complemento}</td>
                                <td>{ddd}</td>
                                <td>{siafi}</td>
                            </tr>
                        )
                    })
                } 
            </table>   
                     
        </ul>
    )
}

export default ListCEP;
