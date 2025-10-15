"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import DarkModeToggle from "@/components/DarkModeToggle"
import Typography from '@mui/material/Typography';

const MapView = dynamic(() => import("@/components/Map/MapView"), {
  ssr: false,
});

const RegionStatsTable = dynamic(
  () => import("@/components/Table/RegionStatsTable"),
  { ssr: false }
);

export default function Home() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("USA");
  const [title, setTitle] = useState("State");
  const [densityOrLandmass, setDensityOrLandmass] = useState("landmass");

  useEffect(() => {
    setTitle(country === "USA" ? "State" : "Province");
  }, [country]);

 useEffect(() => {
  const endpoint = country === "USA" ? "getStates" : "getProvinces";
  fetch(`/api/${endpoint}`)
    .then((r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`)
      return r.json()
    })
    .then((d) => setData(d))
    .catch((e) => console.error("Error fetching", e));
}, [country]);

  return (
    <div className="container">
      <DarkModeToggle />
      <MapView
        densityOrLandmass={densityOrLandmass}
        country={country}
        setDensityOrLandmass={setDensityOrLandmass}
        setCountry={setCountry}
      />
      <Typography variant="h3" style={{ paddingBottom: 10 }}>{title} Data</Typography>
      <RegionStatsTable data={data} />
    </div>
  );
}
