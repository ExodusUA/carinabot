import React, { useEffect } from 'react';
import { useState } from 'react';
import './Profits.css';
import RangeBlock from '../Range/RangeBlock';
import moment from 'moment/moment';
import ProfitsChart from '../ProfitsChart/ProfitsChart';

function Profits() {
  const [currency, setCurrency] = useState('usd');
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    var data = [];

    if (currency === 'usd') {
      data = {
        min: 100,
        max: 100000,
        step: 100,
        symbol: '$',
      };
    } else if (currency === 'eur') {
      data = {
        min: 100,
        max: 100000,
        step: 100,
        symbol: '€',
      };
    } else if (currency === 'btc') {
      data = {
        min: 0.1,
        max: 5,
        step: 0.01,
        symbol: '₿',
      };
    } else {
      data = {
        min: 1,
        max: 100,
        step: 0.01,
        symbol: 'Ξ',
      };
    }

    setCurrencyData(data);
  }, [currency]);

  const [investAmount, setInvestAmount] = useState(currencyData.min);
  const [investMounth, setInvestMounth] = useState(12);
  const [data, setData] = useState([]);

  useEffect(() => {
    var data = [];
    var previousProfit = parseFloat(investAmount) || 0;
    var totalProfit = previousProfit;
    var growthRates = [
      0,   15,  6.43,  12,  9.90,  10,  2.65,  10,
      1.44, 10,  4.06,  10,  6.19,  10,  7.33,  10,
      8.43, 10,  5.98,  10,  4.19,  10,  4.33,  10,
      4.35, 10,  3.81,  10,  2.62,  10,  4.45,  10,
      7.12, 12,  5.47,  13
    ];
    

    for (let i = 0; i < investMounth + 1; i++) {
      const month = moment().add(i, 'months').format('LL');
      var profit;

      if (i === 0) {
        profit = previousProfit.toFixed(2);
      } else {
        profit = (previousProfit * (1 + growthRates[i % growthRates.length] / 100)).toFixed(2);
      }

      data.push({ month, profit });
      previousProfit = parseFloat(profit);
      totalProfit += previousProfit;
    }

    setData(data);
    setTotalProfit(totalProfit);
  }, [currency, investAmount, investMounth]);

  const [totalProfit, setTotalProfit] = useState(0);

  return (
    <div className="profitsChart">
      <div className="profitsControls">
        <div className="currencyBlock">
          <label htmlFor="currency">Currency</label>
          <select name="currency" id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="usd">USD (US Dollars)</option>
            <option value="eur">EUR (Euro)</option>
            <option value="btc">BTC (Bitcoin)</option>
            <option value="eth">ETH (Ethereum)</option>
          </select>
        </div>

        <div>
          <p>Initial investment</p>
          <RangeBlock min={currencyData.min} max={currencyData.max} step={currencyData.step} symbol={currencyData.symbol} currency={currency} value={investAmount} updateValue={setInvestAmount} />
        </div>

        <div>
          <p>Length of investment</p>
          <RangeBlock min={2} max={36} symbol={''} type={'date'} currency={currency} value={investMounth} updateValue={setInvestMounth} />
        </div>
      </div>

      {
        data.length !== 0
          ? <div className="profitsResult">
            <p>Result</p>
            <p>{`${currencyData.symbol} ${data[data.length - 1].profit.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</p>
            <p>{`+ ${(((data[data.length - 1].profit - investAmount) / investAmount) * 100).toFixed(1)} %`}</p>
          </div>
          : null
      }

      <div className="profitsChart">
        <ProfitsChart data={data} symbol={currency} />
      </div>
    </div>
  );
}

export default Profits;
