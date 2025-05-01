import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

const WeatherDisplay = ({ temperature, conditions }) => (
  <div>
    <h1>Temperature: {temperature}°C</h1>
    <h2>Conditions: {conditions}</h2>
  </div>
);
export default App;
