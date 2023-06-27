const apikey = "df25859352f490d5f541f66ff8571e49";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
 const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

 $.when(
    $.ajax({
        url: weatherUrl,
        method:"GET",
    }),
$.ajax({
    url: forecast,
    method: "GET",
}) 
).then(function(currentWeatherResponse, forecastResponse) {
    currentDay = moment(forecastResponse[0].list[0].dt_txt).format("MMMM/Do/YYYY");
    currentTemp = currentWeatherResponse[0].main.temp;
    humidity = currentWeatherResponse[0].main.humidity;
    windSpeed = currentWeatherResponse[0].wind.speed;
    weatherDesc = currentWeatherResponse[0].weather[0].description;
    
    const forecastData = forecastResponse[0].list;
    const fiveDayForecast = [];
  for (let i = 7; i < forecastData.lenght; i += 8){
    const date = moment(forecastData[i].dt_txt).format("MMMM Do, YYYY");
    const temp = forecastData[i].main.temp;
    const humidity = forecastData[i].main.humidity;
    const weatherDesc = forecastData[i].weather[0].description;
  }
  const tempF = ((temp - 273.15) * 9/5 + 32).toFixed(2);
 fiveDayForecast.push({ date, temp: tempF, humidity, weatherDesc });
}
function cityweather(){
    var cit
}
)