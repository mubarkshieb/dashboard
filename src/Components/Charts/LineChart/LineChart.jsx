import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Network Latency (ms)',
            data: [20, 30, 25, 35, 28],
            borderColor: 'rgb(255, 255, 255)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            tension: 0.3,
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
            text: 'Line Chart Example',
        },
    },
};
const LineChart = () => {
    return <Line data={data} options={options} />;
}

export default LineChart