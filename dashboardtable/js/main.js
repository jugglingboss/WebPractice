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
    const des = d.weather[0].description;
    const Des = des.charAt(0).toUpperCase() + des.slice(1)
    document.getElementById('Weather_des').innerHTML = Des;
}
function iconOnWindowLoad(){
    fetch('http://jugglingboss.hopto.org/Data.json')
    .then(function(resp){return resp.json()})
    .then(function(data){
        console.log(data)
        allIcons(data)
    })
    .catch(function() {
        // catch any errors
    });
}
function allIcons( d ){
    var icon = document.getElementById('CeilingLight');
    var iconParent = document.getElementById('CeilingLightParent');
    if(d.Lights.CeilingLight == 'Off'){
        icon.className = "far fa-lightbulb"
        icon.classList.add("Lightoff")
        console.log("off")
    }
    if (d.Lights.CeilingLight == 'On') {
        icon.className = "fas fa-lightbulb"
        icon.classList.add("Lighton")
        console.log("on")
    }
}


window.onload = function() {
    weatherBalloon("5206379");
    iconOnWindowLoad();
}
