import weatherFactory from "../factory/weatherFactory";
import weatherRepository from "../repository/weatherRepository";

const weatherService = {
    async getWeather(lat, lon) {
        const weather = await weatherRepository.getWeather(lat, lon);
        const formattedWeather = weatherFactory.formatWeather(weather);
        return formattedWeather;
    },

    async getForecast(lat, lon) {
        const forecast = await weatherRepository.getForecast(lat, lon);
        const formattedForecast = weatherFactory.formatForecast(forecast);
        return formattedForecast;
    },

    async getWeatherByCity(city) {
        const weatherByCity = await weatherRepository.getWeatherByCity(city);
        const formattedWeatherByCity = await weatherFactory.formatWeatherByCity(weatherByCity);
        return formattedWeatherByCity;
    }
}

export default weatherService