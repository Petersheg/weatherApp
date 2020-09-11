class Weather{
    constructor(lat,long){
        this.apiKey = '125cf67001319596c061a325d9d03ad9';
        this.lat= lat;
        this.long = long;
    };

    // GET WETHER FORM API
    async getWeather(){
        const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.long}&
        exclude=hourly,daily&appid=${this.apiKey}`);

        const jsonData = await data.json()
        return jsonData;
    };

    // CHANGE STATE AND CITY
    changeState(lat,long){
        this.lat = lat;
        this.long = long;
    };
}