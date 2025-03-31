import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import LandscapeIcon from '@mui/icons-material/Landscape';
import { Tooltip } from '@mui/material';

export default function ToggleMapType(props) {
    const { densityOrLandmass, setDensityOrLandmass } = props;

    const handleChange = (event, newMapType) => setDensityOrLandmass(newMapType);
    
    return (
        <ToggleButtonGroup
            value={densityOrLandmass}
            exclusive
            onChange={handleChange}
            aria-label="text alignment"
        >
            <Tooltip title="Landmass" placement='bottom' arrow >
                <ToggleButton value="landmass" aria-label="centered">
                    <LandscapeIcon />
                </ToggleButton>
            </Tooltip>
            <Tooltip title="Density" placement='bottom' arrow >
                <ToggleButton value="density" aria-label="left aligned">
                    <GridOnOutlinedIcon style={{ height: 20 }} />
                </ToggleButton>
            </Tooltip>
        </ToggleButtonGroup>
    )
}
