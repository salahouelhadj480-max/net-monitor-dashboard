import React, { useEffect, useState } from "react";
import { fetchMetrics } from "./api";
import ChartPanel from "./components/ChartPanel";

function App() {
  const [data, setData] = useState({ latency: 0, packet_loss: 0, throughput: 0 });

  useEffect(() => {
    const interval = setInterval(async () => {
      const metrics = await fetchMetrics();
      setData(metrics);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">📡 Network Monitor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ChartPanel title="Latency" value={data.latency} unit="ms" />
        <ChartPanel title="Packet Loss" value={data.packet_loss} unit="%" />
        <ChartPanel title="Throughput" value={data.throughput} unit="Mbps" />
      </div>
    </div>
  );
}

export default App;
