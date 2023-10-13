/** @format */

//Importing required packages
import React from 'react';
import { PureComponent } from 'react';
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import { stripBasename } from '@remix-run/router';
import { Container } from '@mui/material';
import analyticsdata from '../../../Container/Analytics/analyticsdata';
import './chart2.css';

//declaring the colors for the chart
const COLORS = [
  '#361495',
  '#c71585',
  '#7518A1',
  '#017EFA',
  '#0B3B82',
  '#6D3277',
  '#f23384',
  '#002147',
  '#551a8b',
  '#003366',
  '#702963',
  '#f5f5dc',
];
const style = {
  top: '4vh',
  right: '-4.2vw',
  lineHeight: '34px',
};
const RADIAN = Math.PI / 180;

// function for chart
export default function Charts2(
  indata: any[],
  value: string,
  hei: number,
  wid: number,
  legendbool: boolean
) {
  return (
    <PieChart
      width={wid}
      height={hei}>
      {indata && (
        <Pie
          dataKey={value}
          labelLine={false}
          isAnimationActive={true}
          data={indata}
          cx='50%'
          innerRadius={70}
          outerRadius={130}>
          {indata.map((entry, index) => (
            <Cell
              key={`cell-${entry}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      )}
      {legendbool && (
        <Legend
          className='legend'
          iconSize={10}
          layout='vertical'
          verticalAlign='middle'
          wrapperStyle={style}
        />
      )}
      <Tooltip />
    </PieChart>
  );
}
