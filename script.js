const apikey = "27638c082f3c9aeb2ae1d802a60a453c"
const apiurl = "http://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const search = document.querySelector(".search input");
const search_btn = document.querySelector(".search_btn");
const weather_icon = document.querySelector(".weather_icon");

async function checkweather(city){
    const response = await fetch(apiurl+city+`&appid=${apikey}`);
    var data = await response.json();

    if(data.status == "404"){
        document.querySelector(".weather").style.display = "none";
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +" °C";

    if(data.weather[0].main=="Clouds"){
        weather_icon.src = "./weather-app-img/images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weather_icon.src = "./weather-app-img/images/clear.png"
    }
    else if(data.weather[0].main=="Mist"){
        weather_icon.src = "./weather-app-img/images/mist.png"
    }
    else if(data.weather[0].main=="Rain"){
        weather_icon.src = "./weather-app-img/images/rain.png"
    }
    else if(data.weather[0].main=="snow"){
        weather_icon.src = "./weather-app-img/images/snow.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weather_icon.src = "./weather-app-img/images/drizzle.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";


}

search_btn.addEventListener("click",()=>{
    checkweather(search.value)
});