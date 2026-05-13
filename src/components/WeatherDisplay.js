// src/components/WeatherDisplay.js
import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return <p>No weather data to display</p>;

  return (
    <div className="weather-display">
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
