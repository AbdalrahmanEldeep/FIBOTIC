import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, Title, CategoryScale, LinearScale } from "chart.js";
import { Bar} from "react-chartjs-2";
import React from 'react'
import styled from "styled-components";



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


const dt = {
    labels: ['Done Quizzes', 'Not Done Quizzes', 'Numbers of Quezzes'],
    datasets: [{
      label: "Students",
      backgroundColor: ['#8e4ad3','#5e94db',"#ffd194"],
      data: [127,219,339],
      borderWidth: 1,
      borderColor:"#fff"
    }]
  }  
const opt = {
    responsive: true,
    plugins:{
        legend:{
            labels:{
                font:{size:18}
            },
        },

        title:{
            display:true,text:"Student Info Graph"
        }
    }
}

const CharBox = styled.div`
    background-color: #fff;
    padding: 10px;
`
export const Char = () => {
  return (
    <CharBox>
        <Bar  options={opt}  data = {dt}/>
    </CharBox>
  )
}
