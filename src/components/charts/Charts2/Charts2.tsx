import React from "react";
import { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { stripBasename } from '@remix-run/router';
import { Container } from '@mui/material';
import analyticsdata from '../../../Container/Analytics/analyticsdata';

const COLORS = ["#361495", "#7518A1", "#017EFA", "#0B3B82","#6D3277","#f23384","#002147","#551a8b","#003366","#f5f5dc","#c71585", "#702963" ];
const style = {
  top: "6vh",
  left: "30vw",
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
    <Container maxWidth={false}  className='pie'>
    <PieChart width={600} height={275} >
      <Pie 
        dataKey="value"
        labelLine={false}
        isAnimationActive={true}
        data={indata}
        cx='30%'
        
        innerRadius={60}
        outerRadius={120}
        >
            {indata.map((entry, index) => (
            <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} />
          ))}
          
          
          </Pie>
          
          <Legend
        iconSize={10}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
      
      
      <Tooltip />
    </PieChart>
    </Container>
  );
}
