import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const PieChartExample = () => {
  const data = [
    { name: "Category A", value: 800 },
    { name: "Category B", value: 300 },
    { name: "Category C", value: 600 },
    { name: "Category D", value: 200 },
  ];

  const colors = ["#f52e92", "#663eea", "#FFBB28", "#FF8042"];

  return (
    <div className="pieChart-container">
      <div>
          <h1 className="userHeading2">Customers</h1>
          <h1 className="MonthlyEarning">Customers That Buy Products</h1>
        </div>
      <div className="chart-wrapper">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx={150}
            cy={150}
            innerRadius={50}
            outerRadius={70}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            style={{ background: "#fff" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default PieChartExample;
