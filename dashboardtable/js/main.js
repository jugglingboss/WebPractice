function weatherBalloon( cityID ) {
    var key = '407c7e55d7e6ff6c216938f851e30f3d';
    console.log('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        console.log(data)
        drawWeather(data);
    })
    .catch(function() {
        // catch any errors
    });
}
function drawWeather( d ) {
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
    document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
}

window.onload = function() {
    weatherBalloon("5206379");
}