export async function fetchMetrics() {
  const res = await fetch("http://localhost:5000/api/metrics");
  return res.json();
}
