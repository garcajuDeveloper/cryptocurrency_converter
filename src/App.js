import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MainContainer from './styled_components/MainContainer'; 
import Image from './styled_components/Image';
import Header from './styled_components/Header';
import DataForm from './components/DataCurrencyForm';
import ConvertedCurrency from './components/ConvertedResult';
import Spinner from './components/Spinner';
import cryptoicons from './images/cryptoicons.png';


function App() {

  const [currency, saveCurrency] = useState('');
  const [crypto, saveCrypto] = useState('');
  const [convertedResult, saveConvertedResult] = useState({});
  const [loadingSpinner, saveloadingSpinnerStatus] = useState(false);

  useEffect(() => {
    const convertToCrypto = async () =>{
      //avoid first time execution
      if(currency === '') return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
      const resultQuery =   await axios.get(url);
      //show spinner
      saveloadingSpinnerStatus(true);
      //hide the spinner and show query result
      setTimeout(() =>{
        saveloadingSpinnerStatus(false);
        saveConvertedResult(resultQuery.data.DISPLAY[crypto][currency]);
      }, 4000);
    }
    convertToCrypto();
  }, [currency, crypto]);

  const showComponent = (loadingSpinner) ? <Spinner/> : <ConvertedCurrency convertedResult = {convertedResult} />

  return (
    <MainContainer>
      <div>
        <Image 
          src={cryptoicons}
          alt="Crypto icons image"
        />
        {showComponent}
      </div>
      <div>
        <Header>Realtime Crypto-Currency Converter</Header>
        <DataForm
          saveCurrency={saveCurrency}
          saveCrypto={saveCrypto}
        />
      </div>
    </MainContainer>
  );
}

export default App;
