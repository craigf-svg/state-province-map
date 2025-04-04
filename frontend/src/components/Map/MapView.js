
import Map from './Map';
import ToggleMapType from '../ToggleMapType';
import ToggleCountryGroup from '../ToggleCountryGroup';
import './MapStyles.css';

export default function MapView({ densityOrLandmass, setDensityOrLandmass, country, setCountry }) {

    return (
        <div className="container mapview">
            <div className="container">
                <h1 style={{textAlign: 'center'}}>State {densityOrLandmass === "landmass" ? "Landmass" : "Density"} Map</h1>
                <div style={{ display: 'flex', marginBottom: 10, gap: '10px' }}>
                    <ToggleCountryGroup country={country} setCountry={setCountry} />
                    <ToggleMapType densityOrLandmass={densityOrLandmass} setDensityOrLandmass={setDensityOrLandmass} variant="contained" style={{ margin: 20 }} />
                </div>
            </div>
            <div className="map-container">
                <Map densityOrLandmass={densityOrLandmass} />
            </div>
        </div>
    )
}