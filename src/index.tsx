import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { TickerList, Ticker } from './components/TickerList';

const myTickers: Ticker[] = [
    {symbolStr: 'GOOG', name: 'Google', unitPrice: 200.20},
    {symbolStr: 'APPL', name: 'Apple', unitPrice: 100.10}
]

ReactDOM.render(    
    <TickerList tickers={myTickers} />,
    document.getElementById('example')
);