const conditions = [
  { main: "Clear", description: "Sunny", icon: "01d" },
  { main: "Clouds", description: "Cloudy", icon: "03d" },
  { main: "Rain", description: "Light Rain", icon: "09d" },
  { main: "Snow", description: "Snowfall", icon: "13d" },
  { main: "Thunderstorm", description: "Thunderstorm", icon: "11d" },
  { main: "Drizzle", description: "Drizzle", icon: "10d" },
  { main: "Mist", description: "Misty", icon: "50d" }
];

function getWeatherByCity() {
  const city = document.getElementById("cityInput").value || "Unknown City";
  const temp = (Math.random() * 45 - 5).toFixed(1);
  const humidity = Math.floor(Math.random() * 70) + 20;
  const condition = conditions[Math.floor(Math.random() * conditions.length)];

  let bg;
  switch (condition.main.toLowerCase()) {
    case "clear": bg = "linear-gradient(135deg, #facc15, #f97316)"; break;
    case "clouds": bg = "linear-gradient(135deg, #9ca3af, #6b7280)"; break;
    case "rain": bg = "linear-gradient(135deg, #3b82f6, #1e3a8a)"; break;
    case "snow": bg = "linear-gradient(135deg, #e0f2fe, #bae6fd)"; break;
    case "thunderstorm": bg = "linear-gradient(135deg, #4b5563, #1f2937)"; break;
    default: bg = "linear-gradient(135deg, #3b82f6, #06b6d4)";
  }
  document.body.style.background = bg;

  document.getElementById("weatherResult").innerHTML = `
    <h3>${city}</h3>
    <img src="https://openweathermap.org/img/wn/${condition.icon}@2x.png" alt="Weather Icon">
    <p>🌡️ ${temp} °C</p>
    <p>💧 Humidity: ${humidity}%</p>
    <p>🌥️ ${condition.description}</p>
  `;
}
