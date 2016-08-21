import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { TickerList, Ticker } from './components/TickerList/TickerList';

const myTickers: Ticker[] = [
    {id: 1, symbolStr: 'GOOG', name: 'Google', unitPrice: 200.20},
    {id: 2, symbolStr: 'APPL', name: 'Apple', unitPrice: 100.10}
]

ReactDOM.render(    
    <TickerList tickers={myTickers} />,
    document.getElementById('example')
);