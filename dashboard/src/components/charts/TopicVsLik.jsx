import axios from 'axios';
import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

export default function Chart1() {
  let objEnd;
  const [chartData,setChartData] = useState([])
  let arrData = []
  let T = []
  let L = []
  useEffect(()=>{
    const getData = async ()=>{
      const res = await axios.get("/getAllData");
      setChartData(res.data);
    }
    getData();
  },[]);
  chartData.forEach((data)=>{
    if(data.topic && data.likelihood){
      arrData.push({
        topic:data.topic,
        lik:data.likelihood
      })
    }
  })
  
  let newArray = [];
              
            // Declare an empty object
            let uniqueObject = {};
              
            // Loop for the array elements
            for (let i in arrData) {
              
                // Extract the title
                objEnd = arrData[i]['topic'];
              
                // Use the title as the index
                uniqueObject[objEnd] = arrData[i];
            }
              
            // Loop to push unique object into array
            for (let i in uniqueObject) {
                newArray.push(uniqueObject[i]);
            }
  newArray.forEach((dat)=>{
    T.push(dat.topic)
    L.push(dat.lik)
  })
  return (
    <Bar data={{
    // labels:arrEnd.forEach(d=>d.eYear),
    labels:T,
    datasets: [
      {
        id: 1,
        label: 'Likelihood',
        data: L
      }
    ],
  }} options={
    {
        plugins:{
            title:{
                display:true,
                text:"Topics and Likelihood Graph",
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
