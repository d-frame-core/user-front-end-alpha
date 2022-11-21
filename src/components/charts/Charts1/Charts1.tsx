import './charts.css'
import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import { stripBasename } from '@remix-run/router';
import { Container } from '@mui/material';

const data = [
  { name: "YouTube", value: 400 },
  { name: "Netflix", value: 300 },
  { name: "Codechef", value: 300 },
  { name: "Flipkart", value: 200 },
  { name: "Team", value: 278 },
  { name: "TATA NEU", value: 189 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


export default function Charts1() {
  return (
    <Container className="piechart">
    <PieChart  width={400} height={400} >
      
      <Pie 
        dataKey="value"
        isAnimationActive={true}
        data={data}
        cx={180}
        cy={190}
        innerRadius={80}
        outerRadius={130}
        label
        >
            {data.map((entry, index) => (
            <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} />
          ))}
          {data.map((SiteName)=>{
            return <h1>{SiteName.name}</h1>;
          }
            
          )}
      </Pie>
      
      <Tooltip />
    </PieChart></Container>
  );
}
