import React from 'react'
import Chart from "react-apexcharts";
import './TradingChart.css'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import moment from 'moment/moment.js';


function TradingChart() {

  const [currentData, setCurrentData] = useState([])
  const [selectedRange, setSelectedRange] = useState(2) //1 - 3 month, 2 - 6 month, 3 - ALL
  const [parsedData, setParsedData] = useState([])

  useEffect(() => {
    getData()
  }, [selectedRange])

  function getData() {

    var from;
    var to;

    if (selectedRange === 1) {
      from = moment().subtract(3, 'months').format('YYYY-MM-DDTHH:mm:ss');

      to = moment().format('YYYY-MM-DDTHH:mm:ss');
    } else if (selectedRange === 2) {
      from = moment().subtract(6, 'months').format('YYYY-MM-DDTHH:mm:ss');

      to = moment().format('YYYY-MM-DDTHH:mm:ss');
    } else {
      from = moment().subtract(12, 'months').format('YYYY-MM-DDTHH:mm:ss');

      to = moment().format('YYYY-MM-DDTHH:mm:ss');
    }

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://platform.torobase.com/api/ebanking/account/stats?apikey=AKVDXDR9YBU35X7&secret=7LbHZHGgCvuz6XzSEvMU&accountNumber=1106131456827406&from=${from}&to=${to}&accountChartType=TRADING`,
    };

    axios.request(config)
      .then((response) => {
        let data = response.data
        setParsedData(data)
        var res = data.listOfChartCoordinates

        var newData = {
          data: [],
          labels: []
        }

        var previousValue = 0; // Змінна для зберігання попереднього значення

        newData.data = res.map((item) => {
          var updatedValue = item.value + previousValue; // Збільшуємо значення на попереднє значення
          previousValue = updatedValue; // Оновлюємо попереднє значення
          return updatedValue.toFixed(3); // Округлюємо результат до 3 цифр після коми
        })

        newData.labels = res.map((item) => {
          return item.timestamp
        })

        setCurrentData(newData)
      })
      .catch((error) => {
        console.log(error);
      });

  }

  var config = {

    series: [{
      name: "USDT",
      data: currentData.data
    }],
    options: {
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false
        }
      },
      fill: {
        colors: ['#638645']
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        colors: ['#638645']
      },

      labels: currentData.labels,
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: 'left'
      }
    },
  };

  useEffect(() => {
    console.log(currentData.data)
  }, [currentData])

  return (
    <div className='tradingChart'>
      <div className="tradingChartButtons">
        <button className={selectedRange === 1 ? 'tradingChartsActive' : ''} onClick={e => setSelectedRange(1)}>3 MONTH</button>
        <button className={selectedRange === 2 ? 'tradingChartsActive' : ''} onClick={e => setSelectedRange(2)}>6 MONTH</button>
        <button className={selectedRange === 3 ? 'tradingChartsActive' : ''} onClick={e => setSelectedRange(3)}>ALL</button>
      </div>
      {
        currentData.length !== 0
          ? <Chart options={config.options} series={config.series} type="area" height={350} />
          : null
      }
      {
        parsedData.length !== 0 ? (
          <div className="tradingStats">
            <p><b>Profit trades:</b> {parsedData.listOfChartCoordinates.filter(e => e.value > 0).length}</p>
            <p><b>Trades in profit:</b> {(parsedData.listOfChartCoordinates.filter(e => e.value > 0).length / parsedData.listOfChartCoordinates.length * 100).toFixed(2)}%</p>
            <p><b>Loss trades:</b> {parsedData.listOfChartCoordinates.filter(e => e.value < 0).length}</p>
            <p><b>Net profit:</b> {
              parsedData.listOfChartCoordinates.reduce((sum, coordinate) => {
                return sum + coordinate.value;
              }, 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
            } USDT</p>
          </div>
        ) : null
      }





    </div>
  )
}

export default TradingChart