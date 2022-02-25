import "../assets/css/card.css";

function CardFavorite({date, hour, temperature, description, icon, country, city, fav}) {
        return (
            <div className="cardFavorite">
                <div className="card-btn-fav">
                    {fav}
                </div>
                <div className="card-infos-country">
                    <span>{country}</span>
                </div>
                <div className="card-infos-city">
                    <span>{city}</span>
                </div>
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

export default CardFavorite