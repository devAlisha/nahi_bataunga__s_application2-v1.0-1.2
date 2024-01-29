import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Papa from "papaparse";
import bigFile from "../../assets/csv/dataset.csv";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  interaction: {
    mode: "nearest",
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        display: true,
      },
      grid: {
        display: false,
      },
    },
  },
};

export function GrowthChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        fill: true,
        label: "Data",
        data: [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });

  const [labels, setLabels] = useState([]);

  const fetchData = () => {
    let isParsingComplete = false;
    let x = 0;
    let arr = [];
    Papa.parse(bigFile, {
      download: true,
      step: function (row, parser) {
        console.log("Row:", row.data);
        x++;
        arr.push({
          label: row.data[0],
          data: row.data[1],
        });
        if (x > 999) {
          parser.abort(); // stopping after 1000 rows
        }
      },
      complete: function (results) {
        isParsingComplete = true;
        setChartData({
          labels: arr.map((item) => item.label),
          datasets: [
            {
              fill: true,
              label: "Dataset 2",
              data: arr.map((item) => item.data),
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ],
        });
      },
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Line options={options} data={chartData} height={"160px"} width={"full"} />
  );
}
