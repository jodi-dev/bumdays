import React from 'react';
import { Bar } from 'react-chartjs-2';

const MyBarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [10, 20, 30, 40, 50],
      },
      {
        label: 'Dataset 2',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: [20, 30, 40, 50, 60],
      },
      {
        label: 'Dataset 3',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [30, 40, 50, 60, 70],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'My Bars'
        }
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    }
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MyBarChart;
