function getLandmassColor(d) {
  if (d >= 150000) return '#800026';
  if (d >= 100000) return '#BD0026';
  if (d >= 50000) return '#E31A1C';
  if (d >= 25000) return '#FC4E2A';
  if (d >= 12000) return '#FD8D3C';
  if (d >= 6500) return '#FEB24C';
  if (d >= 3000) return '#FED976';
  return '#FFEDA0';
}

function getDensityColor(d) {
  if (d >= 1000) return '#800026';
  if (d >= 500) return '#BD0026';
  if (d >= 200) return '#E31A1C';
  if (d >= 100) return '#FC4E2A';
  if (d >= 50) return '#FD8D3C';
  if (d >= 20) return '#FEB24C';
  if (d >= 10) return '#FED976';
  return '#FFEDA0';
}

const landmassStyle = (feature) => ({
  fillColor: getLandmassColor(feature.properties.land_mass),
  weight: 2,
  opacity: 1,
  color: 'white',
  dashArray: '3',
  fillOpacity: 0.7
});

const densityStyle = (feature) => ({
  fillColor: getDensityColor(feature.properties.density),
  weight: 2,
  opacity: 1,
  color: 'white',
  dashArray: '3',
  fillOpacity: 0.7
});

const highlightFeature = (e) => {
  const layer = e.target;
  layer.setStyle({
    weight: 5,
    color: '#f59e0b',
    dashArray: '',
    fillOpacity: 0.7
  });
  layer.bringToFront();
}

const getLegendTextColor = (hexColor) => {
  const r = Number.parseInt(hexColor.substring(1, 3), 16);
  const g = Number.parseInt(hexColor.substring(3, 5), 16);
  const b = Number.parseInt(hexColor.substring(5, 7), 16);
  const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (brightness >= 128) ? 'black' : 'white';
}

export { landmassStyle, densityStyle, highlightFeature, getLandmassColor, getDensityColor, getLegendTextColor };
