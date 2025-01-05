# 🌟 Time & Weather Dashboard

> An elegant, real-time weather monitoring and time tracking application with a mesmerizing particle animation background. Built with pure JavaScript, HTML5, and CSS3.

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![OpenWeather API](https://img.shields.io/badge/OpenWeather-API-orange)](https://openweathermap.org/api)
[![Particles.js](https://img.shields.io/badge/Particles.js-Enabled-blue)](https://vincentgarreau.com/particles.js/)

## 👀 First Look
![website_image](https://github.com/user-attachments/assets/d18a10c4-beaf-4450-9382-5b550a3e6fd1)

## ✨ Features that Shine

- 🕒 **Real-Time Clock**
  - Live digital clock with seconds precision
  - AM/PM indicator
  - Day and date display with ordinal indicators (1st, 2nd, etc.)

- 🌡️ **Comprehensive Weather Data**
  - Current temperature with "feels like" metrics
  - Humidity levels with pressure readings
  - Weather conditions with visibility information
  - Air Quality Index (AQI) with condition descriptions

- 🎨 **Stunning Visual Design**
  - Interactive particle background animation
  - Responsive card layout with hover effects
  - Clean, modern dark theme interface
  - Smooth transitions and animations

- 📱 **Fully Responsive**
  - Adapts seamlessly to all screen sizes
  - Optimized for mobile devices
  - Flexible grid layout system

## 🚀 Quick Setup

### Prerequisites

```bash
# Node.js installation (for running the server)
node -v  # Should be v12.0.0 or higher

# API Key requirement
# Get your free API key from OpenWeather
# https://openweathermap.org/api
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/time-weather-dashboard.git
   cd time-weather-dashboard
   ```

2. **Configure API Key**
   ```javascript
   // In script.js, replace with your API key
   const apiKey = "YOUR_API_KEY";
   ```

3. **Start the server**
   ```bash
   node server.js
   ```

4. **Access the application**
   ```
   Open http://localhost:8080 in your browser
   ```

## 🛠️ Technical Architecture

```
time-weather-dashboard/
├── 📄 index.html          # Main HTML structure
├── 🎨 style.css          # Embedded in index.html
├── ⚙️ script.js          # Core functionality
├── 🖥️ server.js          # Node.js server
├── 📁 images/
│   ├── weather.png      # Weather icon
│   ├── temperature.png  # Temperature icon
│   ├── aqi.png         # AQI icon
│   └── humidity.png    # Humidity icon
└── 🎯 favicon.png       # Site favicon
```

## 💻 Core Components

### 1. Time Module
```javascript
function updateClock() {
    // Updates time every second
    // Handles date formatting with ordinal suffixes
    // Updates day and date display
}
```

### 2. Weather Module
```javascript
async function fetchInfo() {
    // Fetches weather data from OpenWeather API
    // Updates temperature, humidity, and conditions
    // Handles AQI calculations and display
}
```

### 3. Particle Animation
```javascript
particlesJS("particles-js", {
    // Configures interactive background
    // Manages particle density and movement
    // Controls animation responsiveness
});
```

[Previous sections remain the same until API Integration]

## 🎯 API Integration & Weather Checking

### Setting Up Your City
You can easily check weather for any city by modifying the `city` variable in `script.js`:

```javascript
const apiKey = "YOUR_API_KEY"; // Replace with your API key
const city = "chandigarh";     // Change to your desired city
```

### Testing the API
To verify the API is working:

1. **Direct API Test**
   - Use this format in your browser:
   ```
   https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={YOUR_API_KEY}&units=metric
   ```
   - Example:
   ```
   https://api.openweathermap.org/data/2.5/weather?q=Chandigarh&appid=YOUR_API_KEY&units=metric
   ```

2. **Response Data**
   The API returns comprehensive weather data including:
   - Temperature in Celsius
   - Humidity percentage
   - Atmospheric pressure
   - Weather description
   - Visibility
   - Coordinates for AQI fetching

### Weather Data Flow
```javascript
async function fetchInfo() {
    try {
        // 1. Fetch basic weather data
        const weatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        
        // 2. Use coordinates for AQI data
        const { lon, lat } = weatherData.coord;
        const aqiResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
        );
        
        // 3. Update UI with fetched data
        // Updates temperature, humidity, weather condition, and AQI
    } catch (error) {
        console.error("Error fetching weather or AQI data:", error);
    }
}
```

### Customizing Locations
To check weather for different cities:

1. **Single City Setup**
   ```javascript
   const city = "London";  // Change to any city name
   ```

2. **API Response Example**
   ```json
   {
     "weather": [{"description": "clear sky"}],
     "main": {
       "temp": 20,
       "feels_like": 19.5,
       "humidity": 65,
       "pressure": 1012
     },
     "visibility": 10000,
     ...
   }
   ```

### Important Notes
- The API key in the example is for demonstration purposes only
- Get your own free API key from [OpenWeather](https://openweathermap.org/api)
- API calls are rate-limited based on your plan
- Temperature is returned in Celsius due to the `units=metric` parameter

[Rest of the README remains the same]

## 🎨 Styling Highlights

- **Dark Theme**: Elegant dark color scheme for reduced eye strain
- **Grid Layout**: Responsive grid system for weather metrics
- **Card Design**: Hoverable cards with subtle animations
- **Typography**: Clean, readable fonts with proper hierarchy
- **Particle Effects**: Dynamic background with configurable particles

## 📱 Responsive Breakpoints

```css
/* Tablet Devices */
@media (max-width: 600px) {
    // Adapts to 2x2 grid layout
}

/* Mobile Devices */
@media (max-width: 400px) {
    // Switches to single column layout
}
```

## 🚀 Performance Optimization

- Efficient DOM manipulation
- Optimized API calls
- Lazy loading of particles.js
- Minimal dependency usage
- Compressed image assets

## 🔜 Roadmap

- [ ] Add multiple city support
- [ ] Implement weather forecasting
- [ ] Add weather alerts
- [ ] Include wind speed and direction
- [ ] Add theme customization options

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

[Previous sections remain the same]

## 📬 Let's Connect!

<div align="center">

<p align="center">I'd love to hear from you! Here's how you can reach me:</p>

<a href="mailto:295anmol@gmail.com">
  <img src="https://img.shields.io/badge/Email-295anmol%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
</a>

<a href="https://www.linkedin.com/in/anmol-573a162a6/">
  <img src="https://img.shields.io/badge/LinkedIn-Connect%20with%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
</a>

<a href="https://github.com/Anmol283/time-weather-dashboard">
  <img src="https://img.shields.io/badge/GitHub-View%20Project-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
</a>

---

<p align="center">
  💻 Check out my portfolio website: <a href="#">Coming Soon!</a>
</p>

<p align="center">
  🌟 Star this repository if you find it helpful!
</p>

<p align="center">
  <a href="https://github.com/Anmol283">
    <img src="https://img.shields.io/github/followers/Anmol283?label=Follow&style=social" alt="GitHub followers" />
  </a>
</p>

</div>

## 🙏 Acknowledgments

- [Particles.js](https://vincentgarreau.com/particles.js/)
- [OpenWeather API](https://openweathermap.org/api)
- [Font Awesome](https://fontawesome.com)

---

<div align="center">
Made with ❤️ by ANMOL
</div>
