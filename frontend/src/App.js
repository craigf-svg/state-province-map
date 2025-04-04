import React, { useEffect, useState } from 'react';
import './App.css';
import RegionStatsTable from './components/Table/RegionStatsTable';
import MapView from './components/Map/MapView';

function App() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("USA"); // USA | Canada
  const [title, setTitle] = useState("State"); // State | Province
  const [densityOrLandmass, setDensityOrLandmass] = useState("landmass"); // landmass | density

  useEffect(() => {
    setTitle(country === "USA" ? "State" : "Province")
  }, [country])

  useEffect(() => {
    let endpoint = (country === 'USA') ? 'getStates' : 'getProvinces';

    fetch(`http://localhost:8000/api/${endpoint}.php`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching ', error));
  }, [country]);

  return (
    <div className="container">
      <MapView densityOrLandmass={densityOrLandmass} country={country} setDensityOrLandmass={setDensityOrLandmass} setCountry={setCountry} />
      <h1 className="align-center">{title} Data</h1>
      <RegionStatsTable data={data} />
    </div>
  );
}

export default App;
