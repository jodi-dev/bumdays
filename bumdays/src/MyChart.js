import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

const MyChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      // Accessing the rendering context (ctx) from the canvas
      const ctx = chartRef.current.getContext('2d');
  
      // Your chart data and options
      const data = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            label: 'My Dataset',
            data: [10, 20, 30],
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
      };
  
      const options = {
        // Your chart options here
      };
  
      // Creating the chart
      const myChart = new Chart(ctx, {
        type: 'bar', // or any other chart type
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
        <h2>My Chart</h2>
        <canvas ref={chartRef}></canvas>
      </div>
    );
  };
  
  export default MyChart;