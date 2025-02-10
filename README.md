# 🌤️ Weather App

A sleek and responsive weather application that provides real-time weather information for any city. Built with HTML, CSS, and JavaScript, this app features a modern UI with smooth animations and uses the OpenWeatherMap API to fetch weather data.

## ✨ Features

- 🔄 Real-time weather information
- 🔍 Search for any city worldwide
- 🌡️ Displays temperature in Celsius
- 💧 Shows humidity and wind speed
- 📱 Responsive design with smooth animations
- ⚠️ Error handling for invalid city names
- 🎨 Clean and modern UI with gradient background
- ⌨️ Enter key support for quick searches

## 🚀 Demo

Try out the live demo [here](https://abhinavbajpai30.github.io/WeatherApp/) (replace with your deployed app URL)

## 📋 Prerequisites

Before you begin, you'll need:
- 🔑 An API key from [OpenWeatherMap](https://openweathermap.org/api)
- 🌐 Google Fonts (Poppins) - Typography

## 🛠️ Setup

1. Clone the repository:
```bash
git clone https://github.com/Abhinavbajpai30/WeatherApp.git
cd WeatherApp
```

2. Open `app.js` and replace the API key:
```javascript
let key = "YOUR_API_KEY_HERE";
```

3. Ensure you have the following images in your `images` folder:
- search.png
- humidity.png
- wind.png
- clouds.png
- (and other weather condition images like rain.png, clear.png, etc.)

4. Open `index.html` in your web browser or set up a local server.

## 📱 Usage

1. Enter a city name in the search box
2. Click the search button or press Enter
3. View the current weather information including:
   - Temperature
   - City name
   - Weather condition icon
   - Humidity percentage
   - Wind speed

## 📁 Project Structure

```
weather-app/
├── index.html
├── style.css
├── app.js
└── images/
    ├── search.png
    ├── humidity.png
    ├── wind.png
    ├── clouds.png
    └── [other weather icons]
```

## ⚙️ Customization

### 🌡️ Changing Temperature Units
To switch from Celsius to Fahrenheit, modify the API URL in `app.js` by changing `units=metric` to `units=imperial`.

### 🎨 Styling
The app uses a gradient background that can be customized in `style.css`:
```css
.card {
    background: linear-gradient(135deg, #00feba, #5b548a);
}
```

## 👏 Acknowledgments

- 🌤️ Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- 🎨 Icons and images sources should be credited here
- 📝 Font: [Poppins](https://fonts.google.com/specimen/Poppins) from Google Fonts
