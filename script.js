const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click',()=>{
    
    const APIKey ='a0bc8605d7f642ab9f6552b1f38aaef3';
    const city=document.querySelector('.search-box input').value;

    if(city=='')
    return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=matric&appid=${APIKey}`).then(response => response.json()).then(json => {
        
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = "assets/clear.png";
                break;
            case 'Rain':
                image.src = "assets/rain.png";
                break;
            case 'Snow':
                image.src = "assets/snow.png";
                break;
            case 'Clouds':
                image.src = "assets/cloud.png";
                break; 
            case 'Mist':
                image.src = "assets/mist.png";
                break;
            case 'Haze':
                image.src = "assets/mist.png";
                break;      
            default:
                image.src = 'assets/cloud.png';
        }
        // console.log(json);
        temperature.innerHTML=`${parseInt(json.main.temp)-273}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
        
    })
})


