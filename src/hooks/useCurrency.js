import React, {Fragment, useState} from 'react';
import {LabelSelectCurrency, SelectCurrency} from '../styled_components/DataForm';

const useCurrency = (labelText, initialState, currenciesOptions) => {

    const [state, updateState] = useState('');

    const Choose = () => (
        <Fragment>
            <LabelSelectCurrency>{labelText}</LabelSelectCurrency>
                <SelectCurrency
                    onChange={ event => updateState(event.target.value)}
                    value={state}
                >
                    <option value="">- Select currency -</option>
                    {currenciesOptions.map(optionCurrency => (
                        <option key={optionCurrency.code} value={optionCurrency.code}>
                            {optionCurrency.name}
                        </option>
                    ))}
                </SelectCurrency>
        </Fragment>
    );

    return [state, Choose, updateState];
};

export default useCurrency;