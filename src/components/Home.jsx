import React, { useEffect, useState } from 'react';
import './Home.css';
import KeyToolsSection from './KeyToolsSection';

function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = '86976fcb3e86bf07bc4f81617104b281'; // Replace with your OpenWeather API key
  const CITY_ID = '4347242'; // Annapolis, MD

  useEffect(() => {
    setIsLoading(true);
    // Fetch current weather
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${API_KEY}&units=imperial`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        setIsLoading(false);
      });

    // Fetch 3-day forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&appid=${API_KEY}&units=imperial`)
      .then(response => response.json())
      .then(data => {
        const forecasts = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
        setForecast(forecasts);
      })
      .catch(error => console.error('Error fetching forecast:', error));

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

  // Format date for weather display
  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short', 
      day: 'numeric'
    });
  };

  return (
    <div className="home-container">
      <div className="welcome-banner">
        <h1>Welcome to Maryland LCV Staff Intranet</h1>
        <p>Your central hub for resources, tools, and organization updates</p>
      </div>
      
      <div className="dashboard-grid">
        <section className="weather-card">
          <div className="card-header">
            <h2>Weather in Annapolis</h2>
            <div className="card-badge">Live</div>
          </div>
          
          {isLoading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Loading weather data...</p>
            </div>
          ) : weather ? (
            <>
              <div className="current-weather">
                <div className="weather-primary">
                  <img 
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                    alt={weather.weather[0].description} 
                    className="weather-icon-large"
                  />
                  <div className="weather-temp-main">
                    <span className="current-temp">{Math.round(weather.main.temp)}°F</span>
                    <span className="weather-description">{weather.weather[0].description}</span>
                  </div>
                </div>
                <div className="weather-details">
                  <div className="weather-detail-item">
                    <i className="weather-detail-icon humidity-icon"></i>
                    <div className="weather-detail-info">
                      <span className="detail-label">Humidity</span>
                      <span className="detail-value">{weather.main.humidity}%</span>
                    </div>
                  </div>
                  <div className="weather-detail-item">
                    <i className="weather-detail-icon wind-icon"></i>
                    <div className="weather-detail-info">
                      <span className="detail-label">Wind</span>
                      <span className="detail-value">{Math.round(weather.wind.speed)} mph</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="weather-forecast">
                <h3>3-Day Forecast</h3>
                <div className="forecast-cards">
                  {forecast.map(day => (
                    <div className="forecast-day" key={day.dt}>
                      <div className="forecast-date">{formatDate(day.dt)}</div>
                      <img 
                        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
                        alt={day.weather[0].description} 
                      />
                      <div className="forecast-temp">{Math.round(day.main.temp)}°F</div>
                      <div className="forecast-description">{day.weather[0].description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="weather-error">
              <p>Unable to load weather data. Please try again later.</p>
            </div>
          )}
        </section>

        <section className="announcements-card">
          <div className="card-header">
            <h2>Latest Announcements</h2>
            <div className="card-badge">New</div>
          </div>
          
          {announcements.length > 0 ? (
            <ul className="announcements-list">
              {announcements.map((ann, index) => (
                <li key={index} className="announcement-item">
                  <div className="announcement-content">{ann.text}</div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-announcements">
              <div className="empty-state-icon"></div>
              <p>No recent announcements.</p>
            </div>
          )}
        </section>
      </div>

      <KeyToolsSection />

      <section className="downloads-section">
        <div className="section-header">
          <h2>Downloads & Resources</h2>
          <p>Access commonly used files and resources</p>
        </div>
        
        <div className="downloads-grid">
          <div className="download-item">
            <a href="https://docs.google.com/presentation/u/0/?ftv=1&folder=0AHOE4-J9H_YuUk9PVA&tgif=d" target="_blank" rel="noopener noreferrer">
              <div className="download-icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Google_Slides_logo_%282014-2020%29.svg/1489px-Google_Slides_logo_%282014-2020%29.svg.png" alt="PPT Templates" />
              </div>
              <div className="download-info">
                <h3>PPT Templates</h3>
                <button className="download-button">
                  <span className="button-text">Download</span>
                  <span className="button-icon"></span>
                </button>
              </div>
            </a>
          </div>
          
          <div className="download-item">
            <a href="https://drive.google.com/drive/u/0/folders/1CKM2aJwCI4uTorHA58tPQApPBJUIleOy" target="_blank" rel="noopener noreferrer">
              <div className="download-icon">
                <img src="https://www.mdlcv.org/wp-content/uploads/2021/11/MDLCV_Logo1_S_GreenBlueS.png" alt="Logo Files" />
              </div>
              <div className="download-info">
                <h3>Logo Files</h3>
                <button className="download-button">
                  <span className="button-text">Download</span>
                  <span className="button-icon"></span>
                </button>
              </div>
            </a>
          </div>
          
          <div className="download-item">
            <a href="https://drive.google.com/drive/u/0/folders/17TrNWvQtHfBfWHLmWfvqHdHAhp9qr2oP" target="_blank" rel="noopener noreferrer">
              <div className="download-icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg" alt="Speaking Engagement Bios" />
              </div>
              <div className="download-info">
                <h3>Speaking Engagement Bios</h3>
                <button className="download-button">
                  <span className="button-text">Download</span>
                  <span className="button-icon"></span>
                </button>
              </div>
            </a>
          </div>
          
          <div className="download-item">
            <a href="https://drive.google.com/drive/u/0/folders/1qF5zfGWcYWUAZW7OxTYt7LzuGTZIOTkZ" target="_blank" rel="noopener noreferrer">
              <div className="download-icon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjhKQFNcdq47hohJmZREmoKQ_fH649N8pRQ&s" alt="Font Files" />
              </div>
              <div className="download-info">
                <h3>Font Files</h3>
                <button className="download-button">
                  <span className="button-text">Download</span>
                  <span className="button-icon"></span>
                </button>
              </div>
            </a>
          </div>
          
          <div className="download-item">
            <a href="https://drive.google.com/drive/u/0/folders/1KJU8sH6SYlu3RTOh9qCoqaNiQf0UnA-Z" target="_blank" rel="noopener noreferrer">
              <div className="download-icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Icon_Talking_Points.svg" alt="Quick Copy &amp; Paste Info" />
              </div>
              <div className="download-info">
                <h3>Talking Points</h3>
                <button className="download-button">
                  <span className="button-text">Download</span>
                  <span className="button-icon"></span>
                </button>
              </div>
            </a>
          </div>
          
          <div className="download-item">
            <a href="https://drive.google.com/file/d/14rRpE3s3BgeQIr7_lJ_eaInUVHXdlXAM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <div className="download-icon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjd8z32NmjBfzJ6OXOmT5jFJ_ggpcR3eVJg&s" alt="Strategic Plan" />
              </div>
              <div className="download-info">
                <h3>Strategic Roadmap</h3>
                <button className="download-button">
                  <span className="button-text">Download</span>
                  <span className="button-icon"></span>
                </button>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;