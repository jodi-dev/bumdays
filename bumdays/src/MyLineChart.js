import React, { useEffect, useRef, useState} from 'react';
import Chart from 'chart.js/auto';

const MyLineChart = ({ chartData }) => {
    const chartRef = useRef(null);
    const [dataPoints, setDataPoints] = useState([]);
  
    useEffect(() => {
      // Accessing the rendering context (ctx) from the canvas
      const ctx = chartRef.current.getContext('2d');

      // testing second dataset
      const dataPoints2 = [10, 20, 30, 20, 50, 13, 24];

      // Set staticData to chartData when it changes
      if (chartData !== null && Array.isArray(chartData[0])) {
        setDataPoints(chartData[0]);
        console.log(dataPoints);
      } else {
        console.log("test");
      }

      if (chartData === null) {
        console.log("Chart data is null");
      } else {
        console.log("from MyChart: ", chartData[0])
      }

      // if (Array.isArray(chartData[0])) {
      //   console.log("chart data is an array");
      // }
  
      const data = {
        labels: Array.from({ length: dataPoints.length }, (_, index) => `Label ${index + 1}`),
        datasets: [
          {
            label: 'Dataset 1',
            data: dataPoints,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            fill: false,
          },
          {
            label: 'Dataset 2',
            data: dataPoints2,
            backgroundColor: 'rgba(75,132,132,0.2)',
            borderColor: 'rgba(75,132,132,1)',
            borderWidth: 1,
            fill: false,
          },
        ],
      };
  
      const options = {
        // Your chart options here
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'My Lines'
          }
        }
      };
  
      // Creating the chart
      const myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options,
      });
      
  
        // Cleanup on component unmount
        return () => {
          myChart.destroy();
        };
      }, [chartData, dataPoints]); 

      
  
    return (
      <div>
        <canvas ref={chartRef}></canvas>
      </div>
    );
  };
  
  export default MyLineChart;