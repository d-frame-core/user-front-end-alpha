import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";


export default function Linecharts(linedata:any,linehi:any,linewi:any) {
  return (
    <ResponsiveContainer height={linehi} width={linewi}>
    <LineChart className="linechart1"
     
      data={linedata}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name"  />
      <YAxis/>
      <Tooltip />
      <Line
        type="monotone"
        dataKey="All"
        stroke="#F816FD"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="BrowserData"
        stroke="#017EFA"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="VerificationRewards"
        stroke="#1DCE79"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="Refferals"
        stroke="#F6294E"
        activeDot={{ r: 8 }}
      />

    </LineChart></ResponsiveContainer>
  );
}