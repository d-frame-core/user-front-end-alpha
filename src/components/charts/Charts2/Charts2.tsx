import React from "react";
import { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { stripBasename } from '@remix-run/router';
import { Container } from '@mui/material';
import analyticsdata from '../../../Container/Analytics/analyticsdata';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042","#5f0931","#f23384"];
const style = {
  top: "6vh",
  left: "32vw",
  lineHeight: "34px",
  
};
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }:any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  var per=(percent * 100).toFixed(0);

  return (
    {/*<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${per}%`}
  </text>*/}
  );
};

export default function Charts2(indata: any[] ) {
  return (
    <ResponsiveContainer width={600} height={275}>
    <PieChart  >
      
      <Pie 
        dataKey="value"
        labelLine={false}
        isAnimationActive={true}
        data={indata}
        cx={180}
        cy={130}
        innerRadius={60}
        outerRadius={120}
        >
            {indata.map((entry, index) => (
            <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} />
          ))}
          
          
          </Pie>
          <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
      
      
      <Tooltip />
    </PieChart></ResponsiveContainer>
  );
}
