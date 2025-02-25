import React, { useEffect, useState } from 'react';
import './Home.css';
import KeyToolsSection from './KeyToolsSection';

function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  const API_KEY = '86976fcb3e86bf07bc4f81617104b281'; // Replace with your OpenWeather API key
  const CITY_ID = '4347242'; // Annapolis, MD

  useEffect(() => {
    // Fetch current weather
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${API_KEY}&units=imperial`)
      .then(response => response.json())
      .then(data => setWeather(data));

    // Fetch 3-day forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&appid=${API_KEY}&units=imperial`)
      .then(response => response.json())
      .then(data => {
        const forecasts = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
        setForecast(forecasts);
      });

    // Fetch announcements (from CSV published via Google Sheets)
    const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT2V__1HEUDCsx6JeO6HY5ExPyoBk7t2oH_zgSQzT-U_etFHgSuyyBN4pNGrYIPyfkVdC4s_Nf1ZLH1/pub?gid=438083110&single=true&output=csv';
    fetch(SHEET_URL)
      .then(response => response.text())
      .then(data => {
        const rows = data.split('\n').map(row => row.split(','));
        const ann = rows.slice(1, 4).map(row => ({ timestamp: row[0], text: row[1] }));
        setAnnouncements(ann);
      })
      .catch(error => console.error('Error fetching announcements:', error));
  }, [API_KEY]);

  return (
    <div className="home">
      <div className="top-row">
        <section className="weather-box">
          <h2>Weather in Annapolis</h2>
          {weather ? (
            <div className="weather-content">
              <div className="weather-row">
                <div className="weather-icon">
                  <img 
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                    alt={weather.weather[0].description} 
                  />
                </div>
                <div className="weather-main">
                  <span className="current-temp">{Math.round(weather.main.temp)}°F</span>
                  <span className="weather-description">{weather.weather[0].description}</span>
                </div>
                <div className="weather-details">
                  <p>Humidity: <span>{weather.main.humidity}%</span></p>
                  <p>Wind: <span>{Math.round(weather.wind.speed)} mph</span></p>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading weather...</p>
          )}
          <div className="forecast">
            <div className="forecast-cards">
              {forecast.map(day => (
                <div className="forecast-card" key={day.dt}>
                  <div className="forecast-date">
                    {new Date(day.dt * 1000).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                  <img 
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} 
                    alt={day.weather[0].description} 
                  />
                  <div className="forecast-temp">{Math.round(day.main.temp)}°F</div>
                  <div className="forecast-description">{day.weather[0].description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="announcements">
          <h2>Latest Announcements</h2>
          <ul>
            {announcements.length > 0 ? announcements.map((ann, index) => (
              <li key={index}>{ann.text}</li>
            )) : <li>No recent announcements.</li>}
          </ul>
        </section>
      </div>

      <section className="key-tools">
      <KeyToolsSection />

      </section>

      <section className="downloads">
        <h2>Downloads &amp; Resources</h2>
        <div className="downloads-grid">
          <div className="download-item">
            <a href="https://docs.google.com/presentation/u/0/?ftv=1&folder=0AHOE4-J9H_YuUk9PVA&tgif=d" target="_blank" rel="noopener noreferrer">
              <div className="download-icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Google_Slides_logo_%282014-2020%29.svg/1489px-Google_Slides_logo_%282014-2020%29.svg.png" alt="PPT Templates" />
              </div>
              <p>PPT Templates</p>
              <button className="download-button">Download</button>
            </a>
          </div>
          <div className="download-item">
            <a href="https://drive.google.com/drive/u/0/folders/1CKM2aJwCI4uTorHA58tPQApPBJUIleOy" target="_blank" rel="noopener noreferrer">
              <div className="download-icon">
                <img src="https://www.mdlcv.org/wp-content/uploads/2021/11/MDLCV_Logo1_S_GreenBlueS.png" alt="Logo Files" />
              </div>
              <p>Logo Files</p>
              <button className="download-button">Download</button>
            </a>
          </div>
          <div className="download-item">
            <a href="https://drive.google.com/drive/u/0/folders/17TrNWvQtHfBfWHLmWfvqHdHAhp9qr2oP" target="_blank" rel="noopener noreferrer">
              <div className="download-icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg" alt="Speaking Engagement Bios" />
              </div>
              <p>Speaking Engagement Bios</p>
              <button className="download-button">Download</button>
            </a>
          </div>
          <div className="download-item">
            <a href="https://drive.google.com/drive/u/0/folders/1qF5zfGWcYWUAZW7OxTYt7LzuGTZIOTkZ" target="_blank" rel="noopener noreferrer">
              <div className="download-icon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjhKQFNcdq47hohJmZREmoKQ_fH649N8pRQ&s" alt="Font Files" />
              </div>
              <p>Font Files</p>
              <button className="download-button">Download</button>
            </a>
          </div>
          <div className="download-item">
            <a href="https://drive.google.com/drive/u/0/folders/1KJU8sH6SYlu3RTOh9qCoqaNiQf0UnA-Z" target="_blank" rel="noopener noreferrer">
              <div className="download-icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Icon_Talking_Points.svg" alt="Quick Copy &amp; Paste Info" />
              </div>
              <p>Talking Points + Quick Copy &amp; Paste Info</p>
              <button className="download-button">Download</button>
            </a>
          </div>
          <div className="download-item">
            <a href="https://drive.google.com/file/d/14rRpE3s3BgeQIr7_lJ_eaInUVHXdlXAM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <div className="download-icon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjd8z32NmjBfzJ6OXOmT5jFJ_ggpcR3eVJg&s" alt="Strategic Plan" />
              </div>
              <p>Strategic Roadmap</p>
              <button className="download-button">Download</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
