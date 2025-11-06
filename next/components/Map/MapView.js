import PropTypes from "prop-types";
import ToggleMapType from "@/components/ToggleMapType";
import ToggleCountryGroup from "@/components/ToggleCountryGroup";
import MapComponent from "@/components/Map/MapComponent";
import { Typography } from "@mui/material";

export default function MapView({ densityOrLandmass, setDensityOrLandmass, country, setCountry }) {
  return (
      <div className="mapview">
        <div className="map-title-container">
          <Typography variant="h3" style={{ textAlign: 'center', padding: '1rem' }}>
            State {densityOrLandmass === 'landmass' ? 'Landmass' : 'Density'} Map
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10, gap: '10px', maxHeight: '3rem'  }}>
            <ToggleCountryGroup country={country} setCountry={setCountry} />
            <ToggleMapType densityOrLandmass={densityOrLandmass} setDensityOrLandmass={setDensityOrLandmass} />
          </div>
        </div>
        <div className="map-container">
          <MapComponent densityOrLandmass={densityOrLandmass} />
        </div>
      </div>
  );
}

MapView.propTypes = {
  densityOrLandmass: PropTypes.string.isRequired,
  setDensityOrLandmass: PropTypes.func.isRequired,
  country: PropTypes.string.isRequired,
  setCountry: PropTypes.func.isRequired,
};
