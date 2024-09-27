import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['Pre-ICO', 'POS Mining', 'Offline business', 'Startups', 'ICO', 'IPO'],
    datasets: [
      {
        label: 'Dataset',
        data: [20, 25, 19, 10, 8, 18], // Percentages as values
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',   // First - 20%
          'rgba(54, 162, 235, 0.7)',   // Second - 25%
          'rgba(255, 206, 86, 0.7)',   // Third - 19%
          'rgba(75, 192, 192, 0.7)',   // Fourth - 10%
          'rgba(153, 102, 255, 0.7)',  // Fifth - 8%
          'rgba(255, 159, 64, 0.7)',   // Sixth - 18%
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
      // Custom plugin for drawing text at the center
      beforeDraw: (chart) => {
        const { width, height, ctx } = chart;
        ctx.restore();
        const fontSize = (height / 150).toFixed(2); // Adjust font size according to the chart size
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = 'middle';

        const text = 'Total';
        const amount = '$138,199.00';
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const amountX = Math.round((width - ctx.measureText(amount).width) / 2);
        const textY = height / 2.1;
        const amountY = height / 1.75;

        ctx.fillText(text, textX, textY);
        ctx.fillText(amount, amountX, amountY);
        ctx.save();
      },
    },
  };

  return (
    <div className="w-full max-w-lg mx-auto"> {/* Adjust the size of the chart */}
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
