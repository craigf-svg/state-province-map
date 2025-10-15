import ToggleMapType from "@/components/ToggleMapType";
import ToggleCountryGroup from "@/components/ToggleCountryGroup";
import Map from "@/components/Map/Map";
import { Typography } from "@mui/material";

export default function MapView({ densityOrLandmass, setDensityOrLandmass, country, setCountry }) {
  return (
      <div className="container mapview">
        <div className="container">
          <Typography variant="h3" style={{ textAlign: 'center', padding: '1rem' }}>
            State {densityOrLandmass === 'landmass' ? 'Landmass' : 'Density'} Map
          </Typography>
          <div style={{ display: 'flex', marginBottom: 10, gap: '10px' }}>
            <ToggleCountryGroup country={country} setCountry={setCountry} />
            <ToggleMapType densityOrLandmass={densityOrLandmass} setDensityOrLandmass={setDensityOrLandmass} />
          </div>
        </div>
        <div className="map-container">
          <Map densityOrLandmass={densityOrLandmass} />
        </div>
      </div>
  );
}
