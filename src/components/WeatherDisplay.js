import React from 'react';

function WeatherDisplay({ temperature, conditions }) {
  const tempStyle = {
    color: temperature > 20 ? 'rgb(255,0,0)' : 'blue'
  };

  return (
    <div>
      <p>
        Temperature: <span style={tempStyle}>{temperature}°C</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
}

export default WeatherDisplay;
