import React, { useEffect, useRef, useState} from 'react';
import Chart from 'chart.js/auto';

const MyChart = ({ chartData }) => {
    const chartRef = useRef(null);
    const [dataPoints, setDataPoints] = useState([]);
  
    useEffect(() => {
      // Accessing the rendering context (ctx) from the canvas
      const ctx = chartRef.current.getContext('2d');

      // dummy data
      // const dataPoints = [10, 20, 30, 20, 50, 13, 24];

      // if (chartData === null) {
      //   console.log("Chart data is null");
      //   return;
      // } else {
      //   console.log("from MyChart: ", chartData[0])
      // }

      // if (Array.isArray(chartData[0])) {
      //   console.log("chart data is an array");
      // }

      // Set staticData to chartData when it changes
      if (chartData !== null && Array.isArray(chartData[0])) {
        setDataPoints(chartData[0]);
        console.log(dataPoints);
      } else {
        console.log("test");
      }
  
      const data = {
        labels: Array.from({ length: dataPoints.length }, (_, index) => `Label ${index + 1}`),
        datasets: [
          {
            label: 'My Dataset',
            data: dataPoints,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            fill: false,
          },
        ],
      };
  
      const options = {
        // Your chart options here
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
      }, [chartData]); 
  
    return (
      <div>
        <canvas ref={chartRef}></canvas>
      </div>
    );
  };
  
  export default MyChart;