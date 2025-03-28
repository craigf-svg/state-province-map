import React, { useEffect, useState } from 'react';
import './App.css';
import StateTable from './components/StateTable'
import ToggleCountry from './components/ToggleCountry';
import FlagIcon from './FlagIcon'

function App() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("USA");
  const [title, setTitle] = useState("State");

  useEffect(() => {
    let endpoint = (country === 'USA') ? 'getStates' : 'getProvinces';

    fetch(`http://localhost:8000/api/${endpoint}.php`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching ', error));
  }, [country]);

  const toggleCountry = () => {
    if (country === "USA") {
      setCountry("Canada")
      setTitle("Province")
    } else {
      setCountry("USA")
      setTitle("State")
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>{title} Data</h1>
        <FlagIcon country={country} />
        <ToggleCountry country={country} toggleCountry={toggleCountry} />
      </div>
      <StateTable data={data} />
    </div>
  );
}

export default App;
