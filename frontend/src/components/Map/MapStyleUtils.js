function getLandmassColor(d) {
    return d >= 150000 ? '#800026' :
    d >= 100000 ? '#BD0026' :
    d >= 50000  ? '#E31A1C' :
    d >= 25000  ? '#FC4E2A' :
    d >= 12000  ? '#FD8D3C' :
    d >= 6500   ? '#FEB24C' :
    d >= 3000   ? '#FED976' :
                  '#FFEDA0';
}

function getDensityColor(d) {
    return d >= 1000 ? '#800026' :
           d >= 500  ? '#BD0026' :
           d >= 200  ? '#E31A1C' :
           d >= 100  ? '#FC4E2A' :
           d >= 50   ? '#FD8D3C' :
           d >= 20   ? '#FEB24C' :
           d >= 10   ? '#FED976' :
                       '#FFEDA0';
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
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    layer.bringToFront();
}

  const getLegendTextColor = (hexColor) => {
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);
    const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (brightness >= 128) ? 'black' : 'white';
  }

export { landmassStyle, densityStyle, highlightFeature, getLandmassColor, getDensityColor, getLegendTextColor };