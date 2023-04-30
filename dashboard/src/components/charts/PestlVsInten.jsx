import axios from 'axios';
import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';

export default function Chart1() {
  let objEnd;
  const [chartData,setChartData] = useState([])
  let arrData = []
  let P = []
  let I = []
  useEffect(()=>{
    const getData = async ()=>{
      const res = await axios.get("/getAllData");
      setChartData(res.data);
    }
    getData();
  },[]);
  chartData.forEach((data)=>{
    if(data.pestle && data.intensity){
      arrData.push({
        pest:data.pestle,
        inten:data.intensity
      })
    }
  })
  
  let newArray = [];
              
            // Declare an empty object
            let uniqueObject = {};
              
            // Loop for the array elements
            for (let i in arrData) {
              
                // Extract the title
                objEnd = arrData[i]['pest'];
              
                // Use the title as the index
                uniqueObject[objEnd] = arrData[i];
            }
              
            // Loop to push unique object into array
            for (let i in uniqueObject) {
                newArray.push(uniqueObject[i]);
            }
  newArray.forEach((dat)=>{
    P.push(dat.pest)
    I.push(dat.inten)
  })
  return (
    <Radar data={{
    // labels:arrEnd.forEach(d=>d.eYear),
    labels:P,
    datasets: [
      {
        id: 1,
        label: 'Intensity',
        data: I
      }
    ],
  }} options={
    {
        plugins:{
            title:{
                display:true,
                text:"PESTLE and Intensity Graph",
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
