import axios from 'axios';
import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

export default function Chart1() {
  let objEnd;
  const [chartData,setChartData] = useState([])
  let arrData = []
  let R = []
  let I = []
  useEffect(()=>{
    const getData = async ()=>{
      const res = await axios.get("/getAllData");
      setChartData(res.data);
    }
    getData();
  },[]);
  chartData.forEach((data)=>{
    if(data.region && data.intensity){
      arrData.push({
        reg:data.region,
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
                objEnd = arrData[i]['reg'];
              
                // Use the title as the index
                uniqueObject[objEnd] = arrData[i];
            }
              
            // Loop to push unique object into array
            for (let i in uniqueObject) {
                newArray.push(uniqueObject[i]);
            }
  newArray.forEach((dat)=>{
    R.push(dat.reg)
    I.push(dat.inten)
  })
  return (
    <Pie data={{
    // labels:arrEnd.forEach(d=>d.eYear),
    labels:R,
    datasets: [
      {
        id: 1,
        label: 'Relevence',
        data: I,
        backgroundColor:[
          "#FF6633",
          "#FFB399",
          "#FF33FF",
          "#FFFF99",
          "#00B3E6",
          "#E6B333",
          "#3366E6",
          "#999966",
          "#809980",
          "#E6FF80",
          "#1AFF33",
          "#999933",
          "#FF3380",
          "#CCCC00",
          "#66E64D",
          "#4D80CC",
          "#FF4D4D",
          "#99E6E6",
          "#6666FF"
       ]
      }
    ],
  }} options={
    {
        plugins:{
            title:{
                display:true,
                text:"Region and Intensity Graph",
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
