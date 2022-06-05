import React, { useState } from 'react'
import { useEffect } from 'react';
import {Chart as ChartJS, Tooltip,Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    Tooltip, Title, ArcElement, Legend
);


function DataChartPerformance() {

    
    //CTX PER SCRIVERE ALL INTERNO DEL CANVAS GRAFICO
    const counter = {
        id: 'counter',
        beforeDraw( chart, args, option ){
            const { ctx, chartArea: { top, right,bottom, left, width, height } } = chart;
            ctx.save();
            console.log(height);
            ctx.fillStyle = 'blue';
            ctx.fillRect(200, 200, 10, 10)
            ctx.font = '60px sans-serif';
            ctx.fillText('55%',width / 2, top + (height /2));
        }
        };
    
    const [data, setData] = useState({
        datasets: [{
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
            backgroundColor:[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ]
        },
      ],
        labels: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          
      ], 
    });


    useEffect(()=> {
        const fetchData = () =>  {
          fetch('http://localhost:3000/links').then((data) => {
            const res = data.json();
            return res
          }).then((res) => {
            console.log("RESPONSE", res)
            const label = [];
            const data = [];
            for(var i of res) {
                //label.push(i.Nome);
                data.push(i.Performance);
            }
            setData(
              {
                datasets: [{
                    type:'doughnut',
                    data:data,
                    options: {},
                    plugins: [counter],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    cutout:'85%'
                },
              ],
              labels:label,
            }
            );
          }).catch(e => {
            console.log("error", e)
          }) 
        }
        
      fetchData();
      }, [])
  

    return (
        <div>
            <Doughnut data={data}/>
        </div>
  )
}
export default DataChartPerformance;
