# 🌦️ Weatherify Backend — Node.js Weather API

A production-ready, fully documented **Express.js** backend that delivers **live weather data** via the [OpenWeatherMap API](https://openweathermap.org/api). Built as part of a backend internship — now upgraded with features like **geo search**, **forecast**, **unit switching**, **rate limiting**, **caching**, and **security best practices**.

> ✅ Hosted Live at: [weatherify-6bjf.onrender.com](https://weatherify-6bjf.onrender.com)  
> 🔑 API secured with `.env` secrets & rate-limited for public use.

---

## 🚀 Core Features

✅ **Get Current Weather by City Name**  
✅ **Search by Coordinates** (`lat`, `lon`)  
✅ **Get 5-Day Forecast** (grouped daily)  
✅ **Choose Units:** Metric or Imperial  
✅ **Rate Limiting** (100 req/hr globally, 20 req/10min for forecast)  
✅ **Caching Layer** (in-memory, 10 min TTL)  
✅ **Security Headers via Helmet**  
✅ **Rich Logs with Morgan**  
✅ **.env-based Config** (with public `.env.example`)  
✅ **Clean Modular Codebase**

---

## 📦 Live Endpoints

### 🔹 Current Weather by City

GET /weather?city=Delhi&units=metric

### 🔹 Weather by Coordinates

GET /weather/coordinates?lat=28.6&lon=77.2&units=imperial

### 🔹 5-Day Forecast (grouped into next 3 days)

GET /weather/forecast?city=Mumbai&units=metric

---

### ✅ Sample JSON Response
<pre>
    {
  "city": "Delhi",
  "country": "IN",
  "temperature": "34°C",
  "description": "clear sky",
  "humidity": "40%",
  "windSpeed": "5.2 m/s",
  "icon": "https://openweathermap.org/img/wn/01d@2x.png"
}
</pre>

## 🛡️ Built-in Protections

- **🔐 Rate Limiting** (express-rate-limit)
- **🧠 Caching** (node-cache)  
- **🔒 Secure Headers** (helmet) 
- **🚨 Clean Error Handling**  
- **📋 Request Logging** (morgan)

## 🔧 Technologies Used

- **Node.js** + **Express.js**  
- **Axios** for external API requests
- **Node-Cache** for Lightweight in-memory cache
- **Dotenv** for managing secret environment variables
- **Morgan** for Dev-friendly request logs
- **Helmet** for Adds security headers
- **Postman** for API testing  
- **OpenWeatherMap API**

---

## 🛠️ Project Structure
```
weatherify-backend/
│
├── index.js                # Entry point
├── routes/
│   └── weather.js          # All weather-related endpoints
│   └── info.js             # Root/about routes
├── services/
│   └── weatherService.js   # API fetch + caching logic
├── middleware/
│   ├── logger.js           # Custom logger (deprecated by morgan)
│   └── rateLimiter.js      # Global + per-route rate limits
├── .env # API key (ignored in Git)
├── .env.example            # Sample env file
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── node_modules   (ignored in Git)
```

---

## 🌐 How to Run Locally

### Clone the repo 

- git clone https://github.com/KhannaSahab16/weatherify-backend.git
- cd weatherify-backend

### Install dependencies

- npm install

### Create .env with your OpenWeatherMap key

- cp .env.example .env (Edit .env and paste your actual key)

### Start the server

- node index.js

---

## 📦 API Endpoint

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
    
- You can find the Postman request screenshots inside the screenshots/ folder as proof of working endpoints.

---

## ⚠️ Error Handling

- Returns clean JSON error messages for:
- Missing city parameter
- Invalid city names
- Network/API issues
- Console logs errors for debugging

---

## 🧠 Learnings & Highlights

- ✅ Deep dive into REST APIs & Express.js
- ✅ Used third-party APIs with Axios
- ✅ Designed clean backend structure
- ✅ Implemented caching & rate limiting
- ✅ Clean error-first approach
- ✅ Practiced security with .env, Helmet
- ✅ Realtime API testing in Postman
- ✅ Full deploy flow with Render

---

## ✨ Future Improvements

- Add a frontend interface (HTML + React)
- Introduce authentication (JWT)
- Add user-specific search history (DB)
- Auto-refresh cache periodically
- Dockerize for cloud-native deploy

👨‍💻 Author
> Mehul Khanna – @KhannaSahab16
> Built during backend internship (2025)
> 💬 Feel free to fork, test, or contribute!
