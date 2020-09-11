class Storage{
    constructor(){
        this.lat;
        this.long;
        this.defaulLat = 33.441792;
        this.defaulLong = -94.037689;
    };

    getLocationData(){
        // checking if latitude already exist, 
        if(localStorage.getItem('latitude') === null){//does not exist?
           this.lat = this.defaulLat;// then set it to default value
        }else{
            this.lat = localStorage.getItem('latitude');// else get the current value;
        }

        // checking if longitude alresding exist 
        if(localStorage.getItem('longitude') === null){//does not exist?
            this.long = this.defaulLong;// then set it to default value
        }else{
            this.long = localStorage.getItem('longitude');// else get the current value;
        };

        return{
            latitude : this.lat,
            longitude : this.long
        }

    };

    setLocationData(lat,long){
        localStorage.setItem('latitude', lat);
        localStorage.setItem('longitude', long);
    }
}