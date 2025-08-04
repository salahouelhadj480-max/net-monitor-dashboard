import React from "react";

const ChartPanel = ({ title, value, unit }) => (
  <div className="p-4 shadow-md bg-white rounded-xl text-center">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-3xl text-blue-600">{value} {unit}</p>
  </div>
);

export default ChartPanel;
