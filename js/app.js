// check if browser support service worker
if('serviceWorker' in navigator){
    window.addEventListener('load',(e)=>{
        navigator.serviceWorker.register('./pwa/sw.js')
        .then(()=>{
            console.log('service worker registered successfully');
        });
        e.preventDefault();
    });
}


//const lat=33.441792,long=-94.037689;

// Load content after Dom load
document.addEventListener("DOMContentLoaded", getWeather);

// init ui
const ui = new UI();

// init Storage
const storage = new Storage();
const weatherStorage = storage.getLocationData();

// init weather
const weather = new Weather(weatherStorage.latitude,weatherStorage.longitude);


// ADD EVENT LISTENER FOR CHANGE BUTTON
const button = document.getElementById('w-change-btn');
    button.addEventListener('click',()=>{
        let city = document.getElementById('city').value;
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=f9a43616867e4399a974ef2cc500a538`)
        .then(response => response.json())
        .then(data => {
            const {lat,lng} = data.results[0].geometry;
            weather.changeState(lat,lng);//changing the long and lat
            getWeather();
            storage.setLocationData(lat,lng);
        });
        city = "";
        //const long = document.getElementById('state').value;

        // re-paint the UI again
        
        
        // $('#locModal').modal('hide');

    });


// change long and lat
//weather.changeState(weatherStorage.latitude,weatherStorage.longitude);


function getWeather(){
    
    weather.getWeather()
    .then(result =>{
        ui.paint(result);
    })
    .catch(err => console.log(err));
}