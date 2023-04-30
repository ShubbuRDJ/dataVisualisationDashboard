import axios from 'axios';
import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function Chart1() {
  let objEnd;
  const [chartData,setChartData] = useState([])
  let arrData = []
  let S = []
  let R = []
  useEffect(()=>{
    const getData = async ()=>{
      const res = await axios.get("/getAllData");
      setChartData(res.data);
    }
    getData();
  },[]);
  chartData.forEach((data)=>{
    if(data.sector && data.relevance){
      arrData.push({
        sec:data.sector,
        rel:data.relevance
      })
    }
  })
  
  let newArray = [];
              
            // Declare an empty object
            let uniqueObject = {};
              
            // Loop for the array elements
            for (let i in arrData) {
              
                // Extract the title
                objEnd = arrData[i]['sec'];
              
                // Use the title as the index
                uniqueObject[objEnd] = arrData[i];
            }
              
            // Loop to push unique object into array
            for (let i in uniqueObject) {
                newArray.push(uniqueObject[i]);
            }
  newArray.forEach((dat)=>{
    S.push(dat.sec)
    R.push(dat.rel)
  })
  return (
    <Line data={{
    // labels:arrEnd.forEach(d=>d.eYear),
    labels:S,
    datasets: [
      {
        id: 1,
        label: 'Relevence',
        data: R,
        backgroundColor:"#360f0a",
        borderColor:"#a65416"
      }
    ],
  }} options={
    {
        plugins:{
            title:{
                display:true,
                text:"Sector and Relevence Graph",
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
