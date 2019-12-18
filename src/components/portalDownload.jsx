import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Jan",
    Rahul: 4000,
    Simon: 2400,
    Ram: 2400
  },
  {
    name: "Feb",
    Rahul: 3000,
    Simon: 1398,
    Ram: 2210
  },
  {
    name: "March",
    Rahul: 2000,
    Simon: 9800,
    Ram: 2290
  },
  {
    name: "April",
    Rahul: 2780,
    Simon: 3908,
    Ram: 2000
  },
  {
    name: "May",
    Rahul: 1890,
    Simon: 4800,
    Ram: 2181
  },
  {
    name: "June",
    Rahul: 2390,
    Simon: 3800,
    Ram: 2500
  },
  {
    name: "July",
    Rahul: 3490,
    Simon: 4300,
    Ram: 2100
  }
];

class PortalDownload extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/90v76x08/";

  state = {};
  render() {
    return (
      <BarChart
        width={1000}
        height={600}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Simon" stackId="a" fill="#8884d8" />
        <Bar dataKey="Rahul" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Ram" stackId="a" fill="#FF5733" />
      </BarChart>
    );
  }
}

export default PortalDownload;
