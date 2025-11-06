import * as React from 'react';
import PropTypes from 'prop-types';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { SvgIcon, Tooltip } from '@mui/material';

export default function ToggleCountryGroup(props) {
  const { country, setCountry } = props;
  const handleChange = (event, newCountry) => !!newCountry && setCountry(newCountry);

  return (
    <ToggleButtonGroup
      value={country}
      exclusive
      onChange={handleChange}
      aria-label="text alignment"
    >
      <Tooltip title="USA" placement='bottom' arrow>
        <ToggleButton value="USA" aria-label="left aligned">
          <SvgIcon style={{ height: 20 }}>
            {/* Simplified USA flag icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z" fill="#a62842"></path><path d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z" fill="#a62842"></path><path fill="#a62842" d="M2 11.385H31V13.231H2z"></path><path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path><path fill="#a62842" d="M1 18.769H31V20.615H1z"></path><path d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z" fill="#a62842"></path><path d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z" fill="#a62842"></path><path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path></svg>
          </SvgIcon>
        </ToggleButton>
      </Tooltip>
      <Tooltip title="Canada" placement='bottom' arrow>
        <ToggleButton value="Canada" aria-label="centered" color="secondary">
          <SvgIcon style={{ height: 20 }}>
            {/* Simplified Canada flag icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="M8 4H24V28H8z"></path><path d="M5,4h4V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#c53a28"></path><path d="M27,4h4V28h-4c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 27 16)" fill="#c53a28"></path></svg>
          </SvgIcon>
        </ToggleButton>
      </Tooltip>
    </ToggleButtonGroup>
  );
}

ToggleCountryGroup.propTypes = {
  country: PropTypes.string.isRequired,
  setCountry: PropTypes.func.isRequired,
};
