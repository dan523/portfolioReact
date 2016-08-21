import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-addons-test-utils';
import {expect} from 'chai'
import {TickerList, Ticker} from './TickerList';

describe('TickerList', () => {
    it('renders a list of tickers', () => {
        const myTickers: Ticker[] = [
            {id: 1, symbolStr: 'GOOG', name: 'Google', unitPrice: 200.20},
            {id: 2, symbolStr: 'APPL', name: 'Apple', unitPrice: 100.10}
        ];

        const component: any = ReactTestUtils.renderIntoDocument(
            <TickerList tickers={myTickers} />
        );
       
        const tickers = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'ticker');
        expect(tickers).to.be.ok;
        expect(tickers.length).to.equal(2);
    });

    it('renders the appropriate text for each ticker', () => {
        const myTickers: Ticker[] = [
            {id: 1, symbolStr: 'GOOG', name: 'Google', unitPrice: 200.20},
            {id: 2, symbolStr: 'APPL', name: 'Apple', unitPrice: 100.10}
        ];

        const component: any = ReactTestUtils.renderIntoDocument(
            <TickerList tickers={myTickers} />
        );
       
        const tickers = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'ticker');
        expect(tickers).to.be.ok;
        expect(tickers[0].textContent).to.contain('GOOG');
        expect(tickers[0].textContent).to.contain('Google');
        expect(tickers[0].textContent).to.contain('200.2');
        expect(tickers[1].textContent).to.contain('APPL');
        expect(tickers[1].textContent).to.contain('Apple');
        expect(tickers[1].textContent).to.contain('100.1');
    });
});