import React, { Component } from "react";
import weatherService from "../services/weatherService";
import "../assets/css/weather.css";
import IconTemp from "../assets/icons/icon-temperature.png";
import IconHumidity from "../assets/icons/icon-humidity.png";
import IconWind from "../assets/icons/icon-wind.png";
import CardForecast from "./cardForecast";

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: null,
            forecast: null
        };
    }

    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(async (position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            const weather = await weatherService.getWeather(lat, lon);
            const forecast = await weatherService.getForecast(lat, lon);
            this.setState({ weather: weather });
            this.setState({ forecast: forecast });
        })
    }

    render() {
        return (
            <main>
                <div className="weather-container">
                    {this.state.weather && (
                        <div className={`weather-${this.state.weather.icon} weather-illustration`}>
                            <div className="infos-spatio-temporal">
                                <div>
                                    <span>{this.state.weather.date.hour}</span>
                                    <br />
                                    <span className="info-secondary">{this.state.weather.date.date}</span>
                                </div>
                                <div className="info-country">
                                    <span>{this.state.weather.city}</span>
                                    <br />
                                    <span className="info-secondary">{this.state.weather.country}</span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="weather-infos bg-color-white">
                        <div className="info-weather-container">
                            {this.state.weather && (
                                <div className={`icon-${this.state.weather.icon} weather-icons`}></div>
                            )}
                            {this.state.weather && (
                                <span className="info-description">{this.state.weather.weather.description}</span>
                            )}
                        </div>

                        <div className="infos-sun">
                            <div>
                                {this.state.weather && (
                                    <span className="info-hour-sun">{this.state.weather.sun.sunrise}</span>
                                )}
                                <span className="infos-divider"></span>
                                <span className="info-description-sun">Lever du Soleil</span>
                            </div>

                            <div>
                                {this.state.weather && (
                                    <span className="info-hour-sun">{this.state.weather.sun.sunset}</span>
                                )}
                                <span className="infos-divider"></span>
                                <span className="info-description-sun">Coucher du Soleil</span>
                            </div>
                        </div>

                        <div className="other-infos">
                            <div className="other-info">
                                {this.state.weather && (
                                    <div>
                                        <img src={IconTemp} className="other-infos-icon" />
                                    </div>
                                )}
                                <span className="info-description">
                                    Température
                                </span>
                                <div className="infos-divider"></div>
                                {this.state.weather && (
                                    <div>
                                        {this.state.weather.temperature}°C
                                    </div>
                                )}
                            </div>
                            <div className="other-info">
                                {this.state.weather && (
                                    <div>
                                        <img src={IconHumidity} className="other-infos-icon" />
                                    </div>
                                )}
                                <span className="info-description">
                                    Humidité
                                </span>

                                <div className="infos-divider"></div>
                                {this.state.weather && (
                                    <div>
                                        {`${this.state.weather.humidity}%`}
                                    </div>
                                )}
                            </div>

                            <div className="other-info">
                                {this.state.weather && (
                                    <div>
                                        <img src={IconWind} className="other-infos-icon" />
                                    </div>
                                )}

                                <span className="info-description">
                                    Vitesse du vent
                                </span>

                                <div className="infos-divider"></div>

                                {this.state.weather && (
                                    <div>
                                        {`${this.state.weather.wind.speed} km/h`}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="forecast">
                    <h2>Prévisions</h2>
                    {this.state.forecast && (
                        <div className="forecast-container">
                            {this.state.forecast.map((hour, index) => {
                                return <CardForecast key={index} date={hour.date} hour={hour.hour} temperature={hour.temperature} description={hour.description} icon={hour.icon} />
                            }
                            )}
                        </div>
                    )}
                </div>
            </main>
        );
    }
}