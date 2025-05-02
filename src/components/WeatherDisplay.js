function WeatherDisplay({ weather }) {
  if (!weather || typeof weather.temperature !== "number") {
    return <p>Loading weather...</p>;
  }

  const temperatureStyle = {
    color: weather.temperature > 20 ? "red" : "blue",
  };

  return (
    <div>
      <p>
        Temperature:{" "}
        <span style={temperatureStyle}>{weather.temperature}°C</span>
      </p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
}
