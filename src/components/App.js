import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [weather, setWeather] = useState({ temperature: 25, conditions: 'Sunny' });

  useEffect(() => {
    // Simulating fetch or future dynamic update
    setWeather({ temperature: 25, conditions: 'Sunny' });
  }, []);

  return (
    <div>
         {/* Do not remove the main div */}
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
