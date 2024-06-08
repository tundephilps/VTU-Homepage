import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Airtime",
      data: [32, 42, 51, 60, 51, 95, 100],
      backgroundColor: "#2196F3",
      borderColor: "#2196F3",
    },
    {
      label: "Data",
      data: [37, 42, 41, 37, 31, 44, 80],
      backgroundColor: "#F44236",
      borderColor: "#F44236",
    },
  ],
};

const ChartJsExample = () => {
  return (
    <div className="lg:h-full lg:w-full w-[100vw] lg:mt-12">
      <Line options={options} data={data} />
    </div>
  );
};

export default ChartJsExample;
