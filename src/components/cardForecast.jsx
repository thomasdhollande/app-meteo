import "../assets/css/card.css";

function CardForecast({date, hour, temperature, description, icon}) {
        return (
            <div className="card">
                <div className={`icon-${icon} weather-icons`}></div>
                <div className="card-infos-description">
                    <span>{description}</span>
                    </div>
                <div className="card-infos-temperature">
                    <span>{temperature}°C</span>
                </div>
                <div className="card-infos-temporal">
                    <span className="card-date">{date}</span>
                    <br />
                    <span className="card-hour">{hour}</span>
                </div>
            </div>
        );
}

export default CardForecast