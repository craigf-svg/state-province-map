
import Map from './Map';
import ToggleMapType from '../ToggleMapType';
import ToggleCountryGroup from '../ToggleCountryGroup';

export default function MapView(props) {
    const { densityOrLandmass, setDensityOrLandmass, country, setCountry } = props;

    return (
        <div class="container" style={{ height: '90vh', width: '80vw' }}>
            <div class="container">
                <h1>State {densityOrLandmass === "landmass" ? "Landmass" : "Density"} Map</h1>
                <div style={{ display: 'flex', marginBottom: 10 }}>
                    <ToggleCountryGroup country={country} setCountry={setCountry} />
                    <div style={{ margin: '5px' }}> </div>
                    <ToggleMapType densityOrLandmass={densityOrLandmass} setDensityOrLandmass={setDensityOrLandmass} variant="contained" style={{ margin: 20 }} />
                </div>
            </div>
            <div style={{ width: "100%", height: '80%', maxWidth: '1200px', minWidth: '300px' }}>
                <Map densityOrLandmass={densityOrLandmass} />
            </div>
        </div>
    )
}