import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartOptions } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
    seguidores: number;
}

const BarChart: React.FC<BarChartProps> = ({ seguidores }) => {
    const data = {
        labels: ['Seguidores'],
        datasets: [
            {

                label: 'Seguidores',
                backgroundColor: '#043978',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [seguidores]
            }
        ]
    };

    const options: ChartOptions<'bar'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top', // Asegúrate de usar uno de los valores permitidos
            },
            title: {
                display: true,
                text: 'Total Seguidores',
            },
        },
    };

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
