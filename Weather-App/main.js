const APIkey= "927a814d4b93ff8d9a2b637c7a7f710d";
const APIurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let intext=document.getElementById('intext');
let form=document.querySelector(".search");
var icon=document.getElementById('icon');
var state;

async function checkWeather(city){
    const response = await fetch(APIurl + city + `&appid=${APIkey}`);
    var data = await response.json();

    console.log(data);

    if(data.cod == "404"){
        document.getElementById('invalid').innerHTML="currently unavailable";
        document.querySelector(".weather").style.display="none";
        document.getElementById('temp').innerHTML="";
        document.getElementById('humidity').innerHTML="";
        document.getElementById('wind').innerHTML="";
        icon.innerHTML='<i class="fa-solid fa-cloud-sun-rain"></i>';

    }

    else{

        document.getElementById('invalid').innerHTML="";

        document.querySelector(".weather").style.display="block";

        document.getElementById('city').innerHTML=data.name;
        document.getElementById('temp').innerHTML=Math.round(data.main.temp) + " °c";
        document.getElementById('humidity').innerHTML=data.main.humidity + " %";
        document.getElementById('wind').innerHTML=data.wind.speed + " kmph";

        state=data.weather[0].main;

        if(state == "Clouds"){
            icon.innerHTML='<i class="fa-solid fa-cloud"></i>';
        }
        if(state == "Thunderstorm"){
            icon.innerHTML='<i class="fa-solid fa-cloud-bolt"></i>';
        }
        if(state == "Drizzle"){
            icon.innerHTML='<i class="fa-solid fa-cloud-rain"></i>';
        }
        if(state == "Rain"){
            icon.innerHTML='<i class="fa-solid fa-cloud-showers-water"></i>';
        }
        if(state == "Snow"){
            icon.innerHTML='<i class="fa-solid fa-snowflake"></i>';
        }
        if(state == "Atmosphere"){
            icon.innerHTML='<i class="fa-solid fa-smog"></i>';
        }
        if(state == "Clear"){
            icon.innerHTML='<i class="fa-solid fa-cloud-sun-rain"></i>';
        }
    
    }

}

form.addEventListener('submit',function(event){

    event.preventDefault();

    checkWeather(intext.value.trim());

    intext.value='';

})
