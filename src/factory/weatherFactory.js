import weatherService from "../services/weatherService";

const weatherFactory = {
    formatWeather(weather) {
        const timezone = weather.timezone;
        const countryCode = weather.sys.country;
        const tempFar = weather.main.temp;
        const sunrise = weather.sys.sunrise;
        const sunset = weather.sys.sunset;
        const icon = weather.weather[0].icon;
        const city = weather.name;
        const description = weather.weather[0].description;
        const humidity = weather.main.humidity;
        const windSpeed = weather.wind.speed;

        const newWeather = {
            "date": this.getDateByOffset(timezone),
            "country": this.getCountryName(countryCode),
            "city": city,
            "temperature": this.getTempInt(tempFar),
            "sun": {
                "sunrise": this.getInfosSun(sunrise, sunset).sunrise,
                "sunset": this.getInfosSun(sunrise, sunset).sunset
            },
            "weather": {
                "description": description
            },
            "humidity": humidity,
            "wind": {
                "speed": windSpeed
            },
            "icon": icon
        };

        return newWeather;
    },

    formatForecast(forecast) {
        const hourly = forecast.hourly;
        const forecast24 = hourly.slice(1, 25)

        return forecast24.map(data => {
            const day = ("0" + new Date(data.dt * 1000).getDate()).slice(-2);
            const month = ("0" + new Date(data.dt * 1000).getMonth()).slice(-2);
            const year = ("0" + new Date(data.dt * 1000).getFullYear()).slice(-2);
            const hour = ("0" + new Date(data.dt * 1000).getHours()).slice(-2);
            const minute = ("0" + new Date(data.dt * 1000).getMinutes()).slice(-2);
            return {
                date: `${day}/${month}/${year}`,
                hour: `${hour}:${minute}`,
                temperature: this.getTempInt(data.temp),
                description: data.weather[0].description,
                icon: data.weather[0].icon
            }
        })
    },

    async formatWeatherByCity(weatherByCity) {
        const latitude = weatherByCity[0].lat;
        const longitude = weatherByCity[0].lon;

        const weather = await weatherService.getWeather(latitude, longitude);
        const weatherDescription = weather.weather.description;
        const weatherTemp = weather.temperature;
        const weatherIcon = weather.icon;
        const country = weather.country;
        const city = weather.city;
        const date = weather.date;

        const newWeatherByCity = {
            "city": city,
            "country": country,
            "date": date,
            "weather": {
                "description": weatherDescription,
                "temperature": weatherTemp
            },
            "icon": weatherIcon
        }
        return newWeatherByCity;
    },

    getDateByOffset(timezone) {
        const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
        const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        let d = new Date(new Date().getTime() + (timezone * 1000));
        let hrs = ("0" + d.getUTCHours()).slice(-2);
        let mins = ("0" + d.getUTCMinutes()).slice(-2);
        let day = days[d.getUTCDay() - 1];
        let numDay = ("0" + d.getUTCDate()).slice(-2);
        let month = months[d.getUTCMonth()];
        let year = d.getUTCFullYear();

        const hour = hrs + ":" + mins;
        const date = `${day} ${numDay} ${month} ${year}`;

        const obj_date = { "hour": hour, "date": date };
        return obj_date;
    },

    getCountryName(countryCode) {
        let countryName = new Intl.DisplayNames(['fr'], { type: 'region' });
        return countryName.of(countryCode);
    },

    getTempInt(temp) {
        const tempInt = Math.trunc(temp);
        return tempInt;

    },

    getInfosSun(sunrise, sunset) {
        let dateSunrise = new Date(sunrise * 1000);
        let dateSunset = new Date(sunset * 1000);

        let hourSunrise = ("0" + dateSunrise.getHours()).slice(-2);
        let hourSunset = ("0" + dateSunset.getHours()).slice(-2);

        let minsSunrise = ("0" + dateSunrise.getMinutes()).slice(-2);
        let minsSunset = ("0" + dateSunset.getMinutes()).slice(-2);

        let hoursSunrise = `${hourSunrise}:${minsSunrise}`;
        let hoursSunset = `${hourSunset}:${minsSunset}`;

        let infosSun = { "sunrise": hoursSunrise, "sunset": hoursSunset };
        return infosSun;
    }
}

export default weatherFactory