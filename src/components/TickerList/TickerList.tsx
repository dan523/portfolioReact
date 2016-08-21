import * as React from 'react';

/**
 * Properties for the TickerList component
 * 
 * @export
 * @interface TickerListProps
 */
export interface TickerListProps {
    /**
     * An array of tickers to be displayed in the list
     * 
     * @type {Ticker[]}
     */
    tickers: Ticker[];
}

/**
 * Ticker for a stock symbol
 * 
 * @export
 * @interface Ticker
 */
export interface Ticker {

    /**
     * Unique identifier 
     * 
     * @type {number}
     */
    id: number;
    
    /**
     * The tickers symbol
     * 
     * @type {string}
     */
    symbolStr: string;

    /**
     * The full name of the ticker
     * 
     * @type {string}
     */
    name: string;

    /**
     * The current unit price of the ticker
     * 
     * @type {number}
     */
    unitPrice: number;
}

/**
 * TickerList displays a list of tickers
 * 
 * @export
 * @class TickerList
 * @extends {React.PureComponent<TickerListProps, {}>}
 */
export class TickerList extends React.PureComponent<TickerListProps, {}> {
    private getTickers() {
        return this.props.tickers || [];
    }
    public render() {
        return <ul>
            {
                this.getTickers().map(ticker => {
                    return <li key={ticker.id} className="ticker"> 
                        <span>{ticker.symbolStr}</span>
                        <span>{ticker.name}</span>
                        <span>{ticker.unitPrice}</span>
                    </li>;
                })
            }
        </ul>; 
    }
}