class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        //this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewPoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
        this.time = document.getElementById('w-time');
        this.cal = '';
    };

    paint(weatherr){
        this.cal = new Date(weatherr.current["dt"] * 1000).toLocaleString();
        this.location.textContent = weatherr.timezone;
        this.desc.textContent = `${weatherr.current.weather[0].description}`;
        this.string.textContent = Math.round(weatherr.current.temp);
        //this.icon.setAttribute('src', weatherr.current.weather.icon);
        this.humidity.textContent = Math.round(weatherr.current.humidity);
        this.feelsLike.textContent = Math.round(weatherr.current.feels_like);
        this.dewPoint.textContent = Math.round(weatherr.current.dew_point);
        this.wind.textContent = Math.round(weatherr.current.wind_deg);
        this.time.textContent = `Date: ${this.cal}`
    };
};