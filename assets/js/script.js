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
).then()
// need the day the temperature and humidity wind and description

//I need to put the date the hour and place

