import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  datasets: [
    {
      label: "Dataset 1",
      fill: "start",
      data: [
        10000000, 19000000, 15000000, 24000000, 50000000, 25000000, 20000000,
      ],
      borderColor: "rgba(12, 70, 211, 1)",
      backgroundColor: "rgba(12, 70, 211, 0.2)",
      tension: 0.4,
      fill: true,
    },
    {
      label: "Dataset 2",
      data: [
        10000000, 19000000, 30000000, 24000000, 35000000, 19000000, 10000000,
      ],
      borderColor: "#E7EDFB",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: true,
      mode: "index",
      intersect: false,
      callbacks: {
        title: (context) => {
          return context[0]?.label || "";
        },
        label: (context) => {
          const datasetLabel = context.dataset.label || `Dataset ${context.datasetIndex + 1}`;
          const value = context.raw;
          return `${datasetLabel}: ${value.toLocaleString()} units`;
        },
      },
    },
    legend: {
      display: true, // Enable legend for dataset labels
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      max: 50000000,
      min: 10000000,
      ticks: {
        stepSize: 10000000,
        callback: function (value) {
          return (value / 1000000).toFixed(0) + "M";
        },
      },
    },
  },
};

const MyChart = () => {
  return (
    <div className="w-full overflow-x-auto scrollar-hidden h-[300px] md:h-[500px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default MyChart;
