const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

// Fetch weather data based on user input
async function fetchWeather() {
    const city = document.getElementById('city-input').value;
    const weatherUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`;

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            showErrorMessage(data.error.message);
        }
    } catch (error) {
        showErrorMessage('Unable to fetch weather data.');
    }
}

// Display the fetched weather data on the webpage
function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const forecastInfo = document.getElementById('forecast-info');
    const errorMessage = document.getElementById('error-message');

    const { location, current, forecast } = data;

    // Clear previous error messages
    errorMessage.textContent = '';

    // Display current weather
    weatherInfo.innerHTML = `
        <h2>${location.name}, ${location.country}</h2>
        <p>Temperature: ${current.temp_c}°C</p>
        <p>Condition: ${current.condition.text}</p>
        <p>Humidity: ${current.humidity}%</p>
    `;

    // Display 3-day forecast
    forecastInfo.innerHTML = forecast.forecastday.map(day => `
        <div class="forecast-day">
            <h4>${new Date(day.date).toDateString()}</h4>
            <p>Max Temp: ${day.day.maxtemp_c}°C</p>
            <p>Min Temp: ${day.day.mintemp_c}°C</p>
            <p>Condition: ${day.day.condition.text}</p>
        </div>
    `).join('');
}


async function getWeather(location) {
    const apiKey = 'your_api_key';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      displayError(error.message);
    }
  }

  // Fetch weather data
async function getWeather(location) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
    return await fetch(apiUrl).then(response => response.json());
  }
  
  
  
  // Fetch weather data
async function getWeather(location) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
    return await fetch(apiUrl).then(response => response.json());
  }
  
  // Display the data
  function displayWeather(data) {
    const weatherInfo = document.querySelector('#weather-info');
    weatherInfo.innerHTML = `
      <h2>${data.location.name}</h2>
      <p>${data.current.temp_c}°C - ${data.current.condition.text}</p>
    `;
  }
  
  // Error handling
  function displayError(error) {
    document.querySelector('#weather-info').innerHTML = `<p>Error: ${error}</p>`;
  }
  