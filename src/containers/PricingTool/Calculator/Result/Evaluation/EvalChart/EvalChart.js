import React from 'react';
import { Bar } from "react-chartjs-2";
import Chart from "chart.js";

const evalChart = props => {
    Chart.defaults.global.defaultFontFamily= "Montserrat";
    Chart.defaults.global.defaultFontSize= 9;
    Chart.defaults.global.defaultFontColor= "#555";

    const data = {
        labels: ["LTV Factor", "Loan Size Factor", "DTI Factor", "Amortization Factor", "Geography Factor"],
        datasets: [
            {
                label: "evaluation",
                data: [7,4,2,0,1],
                backgroundColor: [
                    "#18C0B5",
                    "#C3F233",
                    "rgb(0, 153, 255)",
                    "#33F1E9",
                    "#91CB59",                    
                ],
                borderWidth: 1,
                borderColor: "#777",
                hoverBorderWidth: 2,
                hoverBorderColor: "#555"
            },
        ]
    };

    const options = {
        maintainAspectRatio: false,
        title: {
            display: false,
            text: "Evaluation Details",
            fontSize: 12
        },
        legend: {
            display: false
        },
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 20,
            }
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: true,
                    stepSize: 2,
                    max: 10
                }
            }]
        }
    };

    return (
        <div className="eval-chart">
            <Bar data={data}
                 options={options}/>
        </div>
    );
};

export default evalChart;
