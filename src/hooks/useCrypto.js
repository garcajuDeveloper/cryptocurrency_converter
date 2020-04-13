import React, {Fragment, useState} from 'react';
import {LabelSelectCurrency, SelectCurrency} from '../styled_components/DataForm';

const useCryptoCurrency = (labelText, initialState , listCrypto) => {
    
    const [state, updateState] = useState('');

    const ChooseCrypto = () => (
        <Fragment>
            <LabelSelectCurrency>{labelText}</LabelSelectCurrency>
                <SelectCurrency
                    onChange={ event => updateState(event.target.value)}
                    value={state}
                >
                    <option value="">- Select Crypto-currency -</option>
                    {listCrypto.map(optionCryptoCurrency => (
                        <option key={optionCryptoCurrency.CoinInfo.Id} value={optionCryptoCurrency.CoinInfo.Name}>
                            {optionCryptoCurrency.CoinInfo.FullName}
                        </option>
                    ))}
                </SelectCurrency>
        </Fragment>
    );

    return [state, ChooseCrypto, updateState];
};

export default useCryptoCurrency;