function groupForecastData(list, units = "metric") {
  const grouped = {};

  list.forEach((entry) => {
    const date = entry.dt_txt.split(" ")[0];
    if (!grouped[date]) grouped[date] = [];

    grouped[date].push(entry);
  });

  const result = [];

  Object.keys(grouped).slice(0, 5).forEach((date) => {
    const entries = grouped[date];
    const temps = entries.map(e => e.main.temp);
    const descriptions = entries.map(e => e.weather[0].description);
    const icons = entries.map(e => e.weather[0].icon);

    // Get most frequent description
    const descFreq = {};
    descriptions.forEach(d => descFreq[d] = (descFreq[d] || 0) + 1);
    const dominantDescription = Object.entries(descFreq).sort((a, b) => b[1] - a[1])[0][0];

    result.push({
      date,
      min: `${Math.min(...temps)}°${units === 'imperial' ? 'F' : 'C'}`,
      max: `${Math.max(...temps)}°${units === 'imperial' ? 'F' : 'C'}`,
      description: dominantDescription,
      icon: `https://openweathermap.org/img/wn/${icons[0]}@2x.png` 
    });
  });

  return result;
}

module.exports = { groupForecastData };
