import React, { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2';

import './chart.css'

import Accordion from '../Accordion/Accordion';

import chartsTypes from '../../assets/chartsTypes'

function Chart({coins}) {

    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: ["AUD","BGN","BRL","CAD","CHF","CNY","CZK","DKK","EUR","GBP","HKD",],
            datasets: [{
                    label: "Exchange Rates values",
                    data: [0.2570211272, 0.3120891045, 1, 0.2495372439, 0.1730548286, 1.2788983213, 4.171028276, 1.187097083, 0.159571073, 0.1449352141, 1.5165475203, 1.2020169784],
                    backgroundColor: [
                        'rgb(23, 171, 197, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(231, 90, 124, 0.2)',
                        'rgba(255, 102, 216, 0.2)',
                        'rgba(179, 0, 27, 0.2)',
                        'rgba(18, 116, 117, 0.2)',
                    ],
                    borderColor: [
                        'rgb(23, 171, 197, 0.2)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(231, 90, 124, 1)',
                        'rgba(255, 102, 216, 1)',
                        'rgba(179, 0, 27, 1)',
                        'rgba(18, 116, 117, 1)'
                    ],
                    borderWidth: 1
            }],
        })
    }

    useEffect(() => {
        chart();
    }, [])


    return (
        <div className="chart">
            <div className="chart-example">
                <h4>Follow the updates through charts!</h4>
                <Line data={chartData}/>
                <h4>And we have differents types of charts to follow the results!</h4>
            </div>

            <div className="accordionBox">
                {chartsTypes.map(name => (
                    <Accordion 
                        key={name.id} 
                        nameChart={name.nameChart} 
                        description={name.description} 
                        className={name.className} 
                        name={name.name}
                        site={name.site}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default Chart
