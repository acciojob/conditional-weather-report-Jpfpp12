import React from 'react';

function WeatherDisplay({ weather }) {
  const temperatureColor = weather.temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      <p>
        <span style={{ color: temperatureColor }}>
          {weather.temperature}°C
        </span>
      </p>
      <p>{weather.conditions}</p>
    </div>
  );
}

export default WeatherDisplay;
