// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css'; // Import CSS

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '25bda5ab2e3641bb5eb7f8810f20b11a'; // Your API key

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Weather Dashboard</h1>
      <WeatherForm onSubmit={fetchWeather} />
      {error && <p className="error-message">{error}</p>}
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
