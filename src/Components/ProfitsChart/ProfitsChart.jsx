import React from 'react';
import './ProfitsChart.css';
import Chart from "react-apexcharts";
import { useEffect, useState } from 'react';
import moment from 'moment/moment';

function ProfitsChart(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    var arr = props.data.map((element) => {
      var data = { ...element };
      data.profit = Number(element.profit);
      return data;
    });

    setData(arr);
  }, [props.data]);

  var config = {
    series: [
      {
        name: 'Profit',
        data: data.map((item) => parseFloat(item.profit)),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 300,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
        toolbar: {
          show: false, // Вимкнути кнопку меню
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top',
          },
        },
      },
      fill: {
        type: 'gradient',
        colors: ['#638645', '#ff0000'],
        gradient: {
          enabled: true,
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 0.5,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        }
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: 'category',
        categories: data.map((item) => moment(item.month, 'LL').format('MMM, YYYY')),
        labels: {
          show: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          formatter: function (val) {
            return formatCurrency(val);
          },
        },
      },
    },
  };

  const formatCurrency = (value) => {
    const symbol = ''; // Значок валюти
    const suffixes = ['', 'K', 'M', 'B', 'T']; // Суфікси для виводу
    const tier = Math.log10(Math.abs(value)) / 3 | 0; // Визначення розрядності числа
    if (tier === 0) return value; // Якщо число менше 1000, повертаємо його без змін
    const suffix = suffixes[tier]; // Вибір відповідного суфіксу
    const scale = Math.pow(10, tier * 3); // Масштабування числа
    const scaledValue = value / scale; // Масштабоване число
    return scaledValue.toFixed(2) + suffix + symbol; // Повертаємо форматоване число з суфіксом та значком валюти
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  return (
    <div className='profitsChart'>
      {data.length > 0 ? (
        <Chart options={config.options} series={config.series} type='bar' height={screenWidth > 490 ? 500 : 200} />
      ) : null}
    </div>
  );
}

export default ProfitsChart;
