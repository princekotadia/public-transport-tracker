import { useState, useEffect } from "react";
import RouteSelector from "./components/RouteSelector";
import RouteList from "./components/RouteList";
import "./App.css";

function App() {
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [lastUpdatedTime, setLastUpdatedTime] = useState("");

  async function getData() {
    const obj = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await obj.json();

    const transformedData = data.slice(0, 5).map((item) => {
      return {
        id: item.id,
        name: `Route ${item.id}`,
        stops: [
          { stopName: "stop A", time: `${10 + (item.id % 9)}:00` },
          { stopName: "stop B", time: `${10 + (item.id % 9)}:30` },
        ],
      };
    });

    setRoutes(transformedData);
    setLastUpdatedTime(new Date().toLocaleTimeString());
  }

  useEffect(() => {
    getData();

    const interval = setInterval(() => {
      getData();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const selectRdata = routes.find((route) => route.id === selectedRoute);

  return (
    <div className="container">
      <h1 className="title">Public Transport Tracker</h1>

      <RouteSelector routes={routes} setSelectedRoute={setSelectedRoute} />
      <RouteList selectRdata={selectRdata} />

      <button className="refresh" onClick={getData}>Refresh</button>
      <p className="time">Last Updated: {lastUpdatedTime}</p>
    </div>
  );
}

export default App;
