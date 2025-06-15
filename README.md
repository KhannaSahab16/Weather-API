# 🌦️ Weather API Project

A clean and beginner-friendly **Node.js + Express.js** backend project that fetches **live weather data** from the OpenWeatherMap API and returns it in a user-friendly format.

Built as part of a backend internship project with a focus on:
- API integration
- Error handling
- Logging middleware
- Environment configuration
- Clean backend structure

---

## 🚀 Features

✅ Fetch current weather by city name  
✅ Real-time API call to [OpenWeatherMap](https://openweathermap.org/api) 
✅ Easily extensible for forecast data & more 🌤️ 
✅ Proper error handling (e.g., empty/misspelled cities)  
✅ Console-based request logging middleware  
✅ Uses `.env` file for secure API key storage  
✅ Tested using **Postman** 

---

## 🔧 Technologies Used

- **Node.js** + **Express.js**  
- **Axios** for external API requests  
- **Dotenv** for managing environment variables  
- **Postman** for API testing  
- **OpenWeatherMap API**

---

## 🛠️ Project Structure
<pre>
weather-api-app/
│
├── index.js # Main backend file
├── routes
│ └── weather.js
├── services
│ └── weatherService.js 
├── middleware
│ └── logger.js
├── .env # API key (ignored in Git)
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── node_modules   (ignored in Git)
<pre>


---

## 🌐 How to Run Locally

1. **Clone the repo**  

git clone https://github.com/yourusername/weather-api-app.git
cd weather-api-app

2. Install dependencies

npm install

3. Add your API key in .env

OPENWEATHER_API_KEY=your_api_key_here

4. Start the server

node index.js

📦 API Endpoint

GET /weather?city=CityName

✅ Example request in Postman:
    GET http://localhost:3000/weather?city=Delhi

✅ Example response:
    {
  "city": "Delhi",
  "temperature": "34°C",
  "description": "Clear sky",
  "humidity": "50%",
  "windSpeed": "5.2 km/h"
    }
You can find the Postman request screenshots inside the screenshots/ folder as proof of working endpoints.

⚠️ Error Handling

Returns clean JSON error messages for:
Missing city parameter
Invalid city names
Network/API issues
Console logs errors for debugging

🧠 Learnings & Highlights

Built a backend from scratch using Express.js
Worked with third-party APIs using Axios
Applied middleware for request logging
Secured API keys with .env
Tested APIs thoroughly using Postman

✨ Future Improvements

Add a frontend interface (HTML + JS)
Extend API to show 5-day forecast
Add location autocomplete via Map APIs
Rate limiting, caching, and test coverage

Author 
Mehul Khanna
