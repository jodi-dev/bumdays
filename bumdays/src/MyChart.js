import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

const MyChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      // Accessing the rendering context (ctx) from the canvas
      const ctx = chartRef.current.getContext('2d');

      // Your chart data
      const dataPoints = [10, 20, 30, 20, 50, 13, 24];
  
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
    }, []); // Empty dependency array to run the effect only once on mount
  
    return (
      <div>
        <canvas ref={chartRef}></canvas>
      </div>
    );
  };
  
  export default MyChart;