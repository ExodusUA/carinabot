import React from 'react'
import Chart from "react-apexcharts";
import './TradingChart.css'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import moment from 'moment/moment.js';
import loading_black from '../../images/Homepage/loading_black.svg'


function TradingChart() {

  const [currentData, setCurrentData] = useState([])
  const [selectedRange, setSelectedRange] = useState(1) //1 - 3 month, 2 - 6 month, 3 - ALL
  const [parsedData, setParsedData] = useState([])
  const [data, setData] = useState([])

  const [loading, setLoading] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    /*
    if (data.length !== 0) {
      if (data.find(e => e.range === selectedRange) !== undefined) {
        console.log(data.find(e => e.range === selectedRange))
        setCurrentData(data.find(e => e.range === selectedRange).data)
      } else {
        getData()
      }
    }
    */

    getData()

  }, [selectedRange])

  useEffect(() => {
    console.log(data)
  }, [data])

  function getData() {
    setLoading(selectedRange)
    var from;
    var to;

    if (selectedRange === 1) {
      from = moment().subtract(3, 'months').startOf('month').format('YYYY-MM-DDTHH:mm:ss');
      to = moment().endOf('month').format('YYYY-MM-DDT23:59:59');
    } else if (selectedRange === 2) {
      from = moment().subtract(6, 'months').startOf('month').format('YYYY-MM-DDTHH:mm:ss');
      to = moment().endOf('month').format('YYYY-MM-DDT23:59:59');
    } else {
      from = moment().subtract(128, 'months').startOf('month').format('YYYY-MM-DDTHH:mm:ss');
      to = moment().endOf('month').format('YYYY-MM-DDT23:59:59');
    }

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://platform.torobase.com/api/ebanking/account/stats?apikey=AKVDXDR9YBU35X7&secret=7LbHZHGgCvuz6XzSEvMU&accountNumber=1106131456827406&from=${from}&to=${to}&accountChartType=TRADING`,
    };

    axios.request(config)
      .then((response) => {
        let req_data = response.data
        setParsedData(req_data)
        var res = req_data.listOfChartCoordinates

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

        setData([...data, { range: selectedRange, data: newData }])
        setCurrentData(newData)
        setLoading(null)
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
        },
        toolbar: {
          show: false, // Вимкнути кнопку меню
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        colors: ['#ffffff'], // Змінено на білий колір
        width: 1 // Змінено на ширину 1px
      },
      labels: currentData.labels,
      xaxis: {
        type: 'datetime',
        labels: {
          show: false,
          style: {
            colors: '#ffffff' // Колір тексту шкали осі x
          }
        },
        axisBorder: {
          height: 2,
        },
        grid: {
          opacity: 0.8 // Змінено на меншу прозорість
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        opposite: true,
        labels: {
          style: {
            colors: '#ffffff' // Колір тексту шкали осі y
          },
          formatter: function (value) {
            return "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
        },
        grid: {
          opacity: 0.8 // Змінено на меншу прозорість
        }
      },
      legend: {
        horizontalAlign: 'left'
      },
      fill: {
        type: 'gradient',
        colors: ['#638645'],
        gradient: {
          shadeIntensity: 0.5, // Змінено на меншу інтенсивність градієнта
          opacityFrom: 1,
          opacityTo: 0
        }
      },
      grid: {
        borderColor: 'rgba(241, 241, 241, 0.1)'
      }
    }
  };



  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  return (
    <div className='tradingChart'>
      <div className="tradingChartButtons">
        <div className={selectedRange === 1 ? 'tradingChartsActive' : ''} onClick={e => setSelectedRange(1)}>{loading === 1 ? <img className='loadingSpinner' src={loading_black} alt='Loading' /> : ''} <p>3 MONTH</p></div>
        <div className={selectedRange === 2 ? 'tradingChartsActive' : ''} onClick={e => setSelectedRange(2)}>{loading === 2 ? <img className='loadingSpinner' src={loading_black} alt='Loading' /> : ''} <p>6 MONTH</p></div>
        <div className={selectedRange === 3 ? 'tradingChartsActive' : ''} onClick={e => setSelectedRange(3)}>{loading === 3 ? <img className='loadingSpinner' src={loading_black} alt='Loading' /> : ''} <p>ALL</p></div>
      </div>
      {
        currentData.length !== 0
          ? <Chart options={config.options} series={config.series} type="area" height={screenWidth > 490 ? 350 : 250} />
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