import axios from 'axios';
import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function Chart1() {
  let objEnd;
  const [chartData,setChartData] = useState([])
  let arrEndY = []
  let E = []
  let L = []
  useEffect(()=>{
    const getData = async ()=>{
      const res = await axios.get("/getAllData");
      setChartData(res.data);
    }
    getData();
  },[]);
  chartData.forEach((data)=>{
    if(data.end_year && data.likelihood){
      arrEndY.push({
        endY:data.end_year,
        lik:data.likelihood
      })
    }
  })
  
  let newArray = [];
              
            // Declare an empty object
            let uniqueObject = {};
              
            // Loop for the array elements
            for (let i in arrEndY) {
              
                // Extract the title
                objEnd = arrEndY[i]['endY'];
              
                // Use the title as the index
                uniqueObject[objEnd] = arrEndY[i];
            }
              
            // Loop to push unique object into array
            for (let i in uniqueObject) {
                newArray.push(uniqueObject[i]);
            }
  newArray.forEach((dat)=>{
    E.push(dat.endY)
    L.push(dat.lik)
  })
  return (
    <Doughnut data={{
    // labels:arrEnd.forEach(d=>d.eYear),
    labels:E,
    datasets: [
      {
        id: 1,
        label: 'Likelihood',
        data: L,
        backgroundColor:['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']
      }
    ],
  }} options={
    {
        plugins:{
            title:{
                display:true,
                text:"End_year and Likelihood Graph",
                font:{
                    weight:700,
                    size:30,
                },
                color:"black"
            }
        },
        
    }
  }/>
  )
}
