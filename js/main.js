// API JOKES
const URL = 'https://icanhazdadjoke.com/';

// Jokes Main Function
const generateJoke = async () => {
    let response = await fetch(URL, {
        method: 'GET',
        headers: {
            "accept": "application/json"
        }
    });
    let data = await response.json()
    let joke = data.joke;

    document.querySelector('.joke-div').innerHTML = `<h2>"${joke}"</h2>`;
    console.log(joke);
}


// API WHEATHER
// Wheather Main Function
window.addEventListener('load', async () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature');
    const temperatureSpan = document.querySelector('.temperature span');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const long = position.coords.longitude;
            const lat = position.coords.latitude;
        
        let apiKey = '47f77602bceb60c3cccc4a9191dbab9a';

        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);

                 let city = data.name;
                 let weatherTitle = data.weather[0].main;
                 let weatherDescription = data.weather[0].description;
                 let windSpeed = data.wind.speed;
                 console.log(city);// Return your CITY 
                 
                 document.getElementById('city').innerText = `${city}, `;
                 document.getElementById('weatherTitle').innerText = `${weatherTitle}, `;
                 document.getElementById('weatherDescription').innerText = weatherDescription;
            })
        });
    };
});
            
     