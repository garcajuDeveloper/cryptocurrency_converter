import React, { useState, useEffect } from 'react';
import useCurrency from '../hooks/useCurrency';
import useCryptoCurrency from '../hooks/useCrypto';
import axios from 'axios';

import {SubmitButton} from '../styled_components/DataForm';
import Error from '../components/Error';


const DataForm = ({saveCurrency, saveCrypto}) => {

    const CURRENCIES = [
        {code: 'EUR', name:'Euro - Europe'},
        {code: 'USD', name:'Dollar - EEUU'},
        {code: 'JPY', name:'Yen - Japan'},
        {code: 'RUB', name:'Ruble - Russia'},
        {code: 'CNY', name:'Yuan - China'},
        {code: 'BRL', name:'Real - Brazil'},
        {code: 'AED', name:'Dirham - United Arab Emirates'},
        {code: 'GBP', name:'Pound - United Kingdom'}
    ]
    
    const [listCrypto, saveCryptoList] = useState([]);
    const [error, saveError] = useState(false);
    const [currencyState, CurrencySelect] = useCurrency('Choose a currency', '', CURRENCIES);
    const [cryptoState, CryptoSelect] = useCryptoCurrency('Choose a crypto-currency', '', listCrypto);

    //Calling only one time to API
    useEffect(() => {
        const apiQuery = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const queryResponse = await axios.get(url);
            saveCryptoList(queryResponse.data.Data);
        }
        apiQuery();
    },[]);

    const evalueCryptoCurrency = e => {
        e.preventDefault();

        if(currencyState === '' || cryptoState === ''){
            saveError(true);
            return;
        }
        saveError(false);
        saveCurrency(currencyState);
        saveCrypto(cryptoState);
    }

    return ( 
        <form
            onSubmit = {evalueCryptoCurrency}
        >
            {error ? <Error message="please, select a currency and a crypto"/> : null}
            <CurrencySelect/>
            <CryptoSelect/>
            <SubmitButton
                type="submit"
                value="Calculate"
            />
        </form>
     );
}
 
export default DataForm;