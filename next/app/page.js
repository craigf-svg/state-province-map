"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import DarkModeToggle from "@/components/DarkModeToggle"
import TableView from "@/components/Table/TableView";

const MapView = dynamic(() => import("@/components/Map/MapView"), {
  ssr: false,
});

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
    <div className="app-container">
      <DarkModeToggle />
      <MapView
        densityOrLandmass={densityOrLandmass}
        country={country}
        setDensityOrLandmass={setDensityOrLandmass}
        setCountry={setCountry}
      />
      <TableView title={title} data={data} />
    </div>
  );
}
