import React from "react";
import { BarChart, Bar, CartesianGrid, Tooltip, XAxis, Legend } from "recharts";

const RoundedBar = (props) => {
  const { x, y, width, height, fill } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={7} // Set the border radius to 5px
        ry={7} // Set the border radius to 5px
      />
    </g>
  );
};

const BarChartExample = () => {
  const data = [
    { name: "Jan", pv: 4400 },
    { name: "Feb", pv: 2498 },
    { name: "Mar", pv: 9800 },
    { name: "Apr", pv: 5008 },
    { name: "May", pv: 6000 },
    { name: "Jun", pv: 7000 },
    { name: "Jul", pv: 6300 },
    { name: "Aug", pv: 9300 },
    { name: "Sep", pv: 8300 },
    { name: "Oct", pv: 6300 },
    { name: "Nov", pv: 7300 },
    { name: "Dec", pv: 5300 },
  ];

  return (
    <div className="chart-container">
      <div className="d-flex justify-content-between mt-3 ms-3 me-3">
        <div>
          <h1 className="userHeading2">Overview</h1>
          <h1 className="MonthlyEarning">Monthly Earning</h1>
        </div>
        <div>
          <select className="form-select" aria-label="Default select">
            <option defaultValue>Quaterly</option>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">March</option>
          </select>
        </div>
      </div>

      <BarChart
        width={700}
        height={300}
        data={data}
        margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        style={{ background: "#fff" }}
      >
        <CartesianGrid horizontal={false} vertical={false} />
        <Tooltip />
        <XAxis dataKey="name" />
        <Legend />
        <Bar dataKey="pv" shape={<RoundedBar />} />
      </BarChart>
    </div>
  );
};

export default BarChartExample;
