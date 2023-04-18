// map
function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AuioiykgQR6L65sZSOcC2yw6pS6GpHvwhgSryFrMWnr2o1NuFfBZEfKYCr0UrvBM'
    });
}

// get ip
let getI = '';
fetch("https://api.ipify.org?format=json").then(res=>res.json()).then(data=>getI = (data.ip))

// let apiKey = '7beb6d72b9ca9c562faa5bb9e20af4c5';
// fetch(`http://api.ipstack.com/${getI}?access_key=${apiKey}`)
// .then(res=>res.json())
// .then(data=>dataAdres.push(data))
// .catch(error=>console.error(error))

// getting weather
const weatherKey = 'b1dc791245be7075af027c161d8b881a';
const weatherNP = document.getElementById('weatherNP');
const getWeatherBtn = document.getElementById('getWeather');
const weather = document.getElementById('weather');
const country = document.getElementById('country');
const city = document.getElementById('city');
const descriptionn = document.getElementById('description');
const skyIcon = document.getElementById('skyIcon');
const temp = document.getElementById('temp');
const speed = document.getElementById('speed');


getWeatherBtn.onclick = async () => {
    let weatherArr;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherNP.value}&appid=${weatherKey}`);
    const data = await response.json();
    weatherArr = data;
    skyIcon.src = `https://openweathermap.org/img/wn/${weatherArr.weather[0].icon}.png`
    country.innerText = weatherArr.sys.country + " : ";
    city.innerText =". "+ weatherArr.name;
    descriptionn.innerText = 'Sky : ' + weatherArr.weather[0].description ;
    temp.innerText = 'Temp : ' + (weatherArr.main.temp - 273.15).toFixed(1);
    speed.innerText = "Wind speed : " + weatherArr.wind.speed;
}

window.onclick = () => {
    fetch(`https://get-data-141b2-default-rtdb.firebaseio.com/IPCollector/IPs.json`,
        {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({IP : getI})
    }).then(res=>res.json()).then(data=>{})
}

console.log(
    `
                    ██████        ██████        
                  ████▒▒████    ████▒▒██        
██████            ██▒▒  ▒▒████████▒▒  ██        
██  ██            ██▓▓▒▒▒▒▓▓▒▒▓▓▒▒▓▓▒▒████      
██▒▒██          ████▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒████    
██▓▓████        ██▓▓▓▓▒▒▓▓▒▒▒▒▒▒▒▒▓▓▒▒▓▓██      
████▒▒████████████▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒████    
  ████▓▓▒▒▓▓▒▒▓▓▒▒▓▓▓▓▒▒▒▒▒▒  ░░  ▒▒▒▒▓▓██      
    ████████▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒████    
          ██▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████      
          ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████        
          ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒    ▒▒▒▒██          
          ██▒▒▒▒▒▒        ▒▒    ▒▒  ██          
          ████▒▒▒▒██▒▒▒▒██▒▒████▒▒████          
          ████  ████  ████  ████  ████          
            ████████████████████████            
                                                
                   Abdulrahman                                

`
)