const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4daa0a7702mshaef4c36f45b5015p1f3c25jsnefb40b561d0e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather=(city)=>{ //function
    cityName.innerHTML= city


fetch(url + city, options)
    .then(Response => Response.json())
    .then(Response => {

        console.log(Response)
        cloud_pct.innerHTML = Response.cloud_pct
        temp.innerHTML = Response.temp
        temp2.innerHTML = Response.temp
        feels_like.innerHTML = Response.feels_like
        humidity.innerHTML = Response.humidity
        humidity2.innerHTML = Response.humidity
        min_temp.innerHTML = Response.min_temp
        max_temp.innerHTML = Response.max_temp
        wind_speed.innerHTML = Response.wind_speed
        wind_speed2.innerHTML = Response.wind_speed
        wind_degrees.innerHTML = Response.wind_degrees
        sunrise.innerHTML = Response.sunrise
        sunset.innerHTML = Response.sunset
        cloud_pct3= Response.cloud_pct(Ayodhya)


    })
    .catch(err => console.log(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault() // so that page does not reload when entering a city name.
    getWeather(city.value) //city is the id for input in search box
})


    let a;
    let date;
    let time;

    const options2 = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',};

    setInterval(() => { //setinterval func is used to repeatedly execute a function at an interval
    a= new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML= time + "<br> on " +  date;
}, 1000);



getWeather("Ayodhya"); //by default for AYODHYA