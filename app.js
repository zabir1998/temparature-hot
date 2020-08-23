const apiKey = '71d79c758ee358023e30bf8b86abb841';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city =>{
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response=>response.json())
        .then(data=>updateUI(data))
}

const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', ()=>{
    const inputCity = document.getElementById('city').value;
    getWeatherData(inputCity)
})

const updateUI = data=>{
    document.getElementById('show_city').innerText = data.name || "Unknown City";
    document.getElementById('show_temp').innerText = data.main.temp;
    document.getElementById('show_status').innerText= data.weather[0].main;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('city').value="";
}

getWeatherData('Dhaka');