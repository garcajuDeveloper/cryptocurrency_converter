import React from 'react';
import { ConvertedCurrencyContainer} 
    from '../styled_components/ConvertedCurrencyStyles';

const ConvertedCurrency = ({convertedResult}) => {
    
    if(Object.keys(convertedResult).length === 0) return null;

    return ( 
        <ConvertedCurrencyContainer>
            <ul>
                <li>Price: <span>{convertedResult.PRICE}</span></li>
                <li>Day's highest price: <span>{convertedResult.HIGHDAY}</span></li>
                <li>Day's lowest price: <span>{convertedResult.LOWDAY}</span></li>
                <li>Latest 24 hours variation: <span>{convertedResult.CHANGEPCT24HOUR}%</span></li>
                <li>Updated: <span>{convertedResult.LASTUPDATE}</span></li>
            </ul>
        </ConvertedCurrencyContainer>
     );
}
 
export default ConvertedCurrency;