import ToggleMapType from "@/components/ToggleMapType";
import ToggleCountryGroup from "@/components/ToggleCountryGroup";
import Map from "@/components/Map/Map";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: '#64748b', // slate-500
          backgroundColor: '#f8fafc', // slate-50
          border: '1px solid #e2e8f0', // slate-200
          '&:hover': {
            backgroundColor: '#f1f5f9', // slate-100
          },
          '&.Mui-selected': {
            color: '#ffffff',
            backgroundColor: '#3b82f6', // blue-500
            border: '1px solid #3b82f6',
            '&:hover': {
              backgroundColor: '#2563eb', // blue-600
            },
          },
        },
      },
    },
  },
});

export default function MapView({ densityOrLandmass, setDensityOrLandmass, country, setCountry }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="container mapview">
        <div className="container">
          <h1 style={{ textAlign: 'center' }}>
            State {densityOrLandmass === 'landmass' ? 'Landmass' : 'Density'} Map
          </h1>
          <div style={{ display: 'flex', marginBottom: 10, gap: '10px' }}>
            <ToggleCountryGroup country={country} setCountry={setCountry} />
            <ToggleMapType densityOrLandmass={densityOrLandmass} setDensityOrLandmass={setDensityOrLandmass} />
          </div>
        </div>
        <div className="map-container">
          <Map densityOrLandmass={densityOrLandmass} />
        </div>
      </div>
    </ThemeProvider>
  );
}
