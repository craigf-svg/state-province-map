import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Typography from '@mui/material/Typography';

const RegionStatsTable = dynamic(
  () => import('@/components/Table/RegionStatsTable'),
  {
    ssr: false,
  }
);

export default function TableView({ title, data }) {
  return (
    <div className="tableview">
      <Typography
        variant="h3"
        style={{ display: 'flex', justifyContent: 'center', paddingBottom: 10 }}
      >
        {title} Data
      </Typography>
      <RegionStatsTable data={data} />
    </div>
  );
}

TableView.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
};
