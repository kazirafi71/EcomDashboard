import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "Revenue",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "blue",
      borderColor: "#8471B4",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const RevenueChart = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default RevenueChart;
