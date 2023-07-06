import React, { useState, useEffect } from 'react';
import './Stock.css';

function Stock() {
  const [stock, setStock] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://falnibackend.onrender.com/stock')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch stock data');
        }
        return response.json();
      })
      .then(data => {
        if (data.status && data.data) {
          setStock(data.data);
        } else {
          throw new Error('Invalid stock data format');
        }
      })
      .catch(error => {
        setError(error.message);
        console.log(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!stock) {
    return <div>Loading...</div>;
  }

  return (
    <div className="stock-list">
      <h2>Stock Details</h2>
      <table>
        <tbody>
          <tr>
            <th>Stock Name</th>
            <td>{stock.StockName}</td>
          </tr>
          <tr>
            <th>Symbol</th>
            <td>{stock.Symbol}</td>
          </tr>
          <tr>
            <th>Sector</th>
            <td>{stock.sector}</td>
          </tr>
          <tr>
            <th>ISIN</th>
            <td>{stock.ISIN}</td>
          </tr>
          <tr>
            <th>Short Name</th>
            <td>{stock.shortName}</td>
          </tr>
          <tr>
            <th>BSE Code</th>
            <td>{stock.bseCode}</td>
          </tr>
          <tr>
            <th>NSE Code</th>
            <td>{stock.nseCode}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td>{stock.website}</td>
          </tr>
          <tr>
            <th>Market Cap</th>
            <td>{stock.marketCap}</td>
          </tr>
          <tr>
            <th>Current Price</th>
            <td>{stock.currentPrice}</td>
          </tr>
          <tr>
            <th>High</th>
            <td>{stock.highLow.high}</td>
          </tr>
          <tr>
            <th>Low</th>
            <td>{stock.highLow.low}</td>
          </tr>
          <tr>
            <th>Stock PE</th>
            <td>{stock.stockPE}</td>
          </tr>
          <tr>
            <th>Book Value</th>
            <td>{stock.bookValue}</td>
          </tr>
          <tr>
            <th>Dividend Yield</th>
            <td>{stock.dividendYield}</td>
          </tr>
          <tr>
            <th>ROCE</th>
            <td>{stock.roce}</td>
          </tr>
          <tr>
            <th>ROE</th>
            <td>{stock.roe}</td>
          </tr>
          <tr>
            <th>Face Value</th>
            <td>{stock.faceValue}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Stock;
