import { useMemo } from "react";
import PropTypes from "prop-types";
import { getDensityColor, getLandmassColor, getLegendTextColor } from "@/components/Map/MapStyleUtils";

const densityGrades = [0, 10, 20, 50, 100, 200, 500, 1000];
const landmassGrades = [0, 3000, 6500, 12000, 25000, 50000, 100000, 150000];

export default function LegendControl({ densityOrLandmass }) {
  const legend = useMemo(() => {
    const grades = densityOrLandmass === 'landmass' ? landmassGrades : densityGrades;
    const getGradeColor = densityOrLandmass === 'landmass' ? getLandmassColor : getDensityColor;

    const list = grades.map((x, index) => (
      <div
        className="legend-item"
        style={{ background: getGradeColor(x), color: getLegendTextColor(getGradeColor(x)) }}
        key={x}
      >
        {x.toLocaleString()}{grades[index + 1] ? `–${grades[index + 1].toLocaleString()}` : '+'} {densityOrLandmass === 'landmass' ? 'mi²' : 'people/mi²'}
      </div>
    ));

    return <div className="legend-container">{list}</div>;
  }, [densityOrLandmass]);

  return (
    <div className="leaflet-top leaflet-right" style={{ color: '#555' }}>
      <div className="leaflet-control leaflet-bar">{legend}</div>
    </div>
  );
}

LegendControl.propTypes = {
  densityOrLandmass: PropTypes.string.isRequired,
};
