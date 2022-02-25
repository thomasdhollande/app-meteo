import { API_BASE_URL, API_KEY } from "../services/constants";

const weatherRepository = {
    async getWeather(lat, lon) {
        try {
            const httpCall = await fetch(`${API_BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=fr&units=metric`);
            const weather = await httpCall.json();
            return weather;
        }
        catch (err) {
            console.log("Error : " + err);
        }
    },

    async getForecast(lat, lon) {
        try {
            const httpCall = await fetch(`${API_BASE_URL}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=${API_KEY}&lang=fr&units=metric`);
            const forecast = await httpCall.json();
            return forecast;
        }
        catch (err) {
            console.log("Error : " + err);
        }
    },

    async getWeatherByCity(city) {
        try{
            const httpCall = await fetch(API_BASE_URL + `/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}&lang=fr&units=metric`); 
            return await httpCall.json();
         
        }catch(err){
            console.log("error : ", err)
        }
    } 
}

export default weatherRepository