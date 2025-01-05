const timeEl = document.getElementById('time');
const amPmEl = document.getElementById('am-pm');
const dateEl = document.getElementById('date');
const dayEl = document.getElementById('day');
const weatherEl = document.getElementById('weather');
const temperatureEl = document.getElementById('temperature');
const aqiEl = document.getElementById('aqi'); 
const humidityEl = document.getElementById('humidity');

let tasks = [];

// Update clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const amPm = now.getHours() >= 12 ? 'PM' : 'AM';
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    timeEl.textContent = `${hours}:${minutes}:${seconds}`;
    amPmEl.textContent = amPm;

    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const day = days[now.getDay()];

    //dates formating 
    const ordinalSuffix = (n) => {
        if (n > 3 && n < 21) return 'th';
        switch (n % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    dateEl.textContent = `${date}${ordinalSuffix(date)} ${month}, ${year}`;
    dayEl.textContent = day;
}
setInterval(updateClock, 1000);

// Fetch weather and AQI
async function fetchInfo() {
    try {
        const apiKey = "4bb48d617079c472150c55ba06dd26c3";
        const city = "chandigarh";

        // Fetch weather data 
        const weatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const weatherData = await weatherResponse.json();
        
        // Update humidity
        document.querySelector('#humidity .data-content').innerHTML = `
        <p>${weatherData.main.humidity}%</p>
        <p class="extra-info">Pressure: ${weatherData.main.pressure} hPa</p>
        `;

        // Update weather
        const visibilityInKm = (weatherData.visibility / 1000).toFixed(1); //conversion
        document.querySelector('#weather .data-content').innerHTML = `
        <p>${weatherData.weather[0].description}</p>
        <p class="extra-info">Visibility: ${visibilityInKm} km</p>
        `;

        // Update temperature
        document.querySelector('#temperature .data-content').innerHTML = `
        <p>${weatherData.main.temp}°C</p>
        <p class="extra-info">Feels Like: ${weatherData.main.feels_like}°C</p>
        `;

        // Fetch and update AQI
        const { lon, lat } = weatherData.coord; 
        const aqiResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
        );
        const aqiData = await aqiResponse.json();

        const aqiValue = aqiData.list[0].main.aqi; 
        const aqiCondition = getAqiCondition(aqiValue); 
        document.querySelector('#aqi .data-content').innerHTML = `
        <p>${aqiValue}</p>
        <p class="extra-info">Condition: ${aqiCondition}</p>
        `;
    } catch (error) {
        console.error("Error fetching weather or AQI data:", error);
    }
}

function getAqiCondition(aqiValue) {
    if (aqiValue === 1) return "Good";
    if (aqiValue === 2) return "Fair";
    if (aqiValue === 3) return "Moderate";
    if (aqiValue === 4) return "Poor";
    if (aqiValue === 5) return "Very Poor";
    return "Unknown"; 
}


fetchInfo();
