import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

function App() {
const [weather, setWeather] = useState({
temperature: null,
conditions: null
});

useEffect(() => {
const fetchWeather = () => {
setTimeout(() => {
setWeather({
temperature: 28,
conditions: "Partly Cloudy"
});
}, 2000);
};

fetchWeather();
}, []);
return (
<div>
{weather.temperature !== null && weather.conditions ? (
<WeatherDisplay
temperature={weather.temperature}
conditions={weather.conditions}
/>
) : (
<p>Loading weather data…</p>
)}
</div>
);
}

export default App;
