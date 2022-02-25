import { Component } from "react"
import { Input } from 'antd';
import { connect } from "react-redux"
import weatherService from "../services/weatherService";
import { addFavorite } from "../store/reducers/favoriteReducer"
import { StarOutlined, StarFilled } from '@ant-design/icons'
import "../assets/css/search.css";
import CardSearch from "../components/cardSearch";
import Header from "../components/Header";
import "../assets/css/header.css";

const { Search } = Input;

export class SearchCity extends Component {

    constructor(props) {
        super(props)
        this.state = {
            weatherByCity: null,
            listOfFavorites: [],
            isFavorite: false,
        }
    }

    handleFavorite = () => {
        this.props.addFavorite({
            city: this.state.weatherByCity.city,
            description: this.state.weatherByCity.weather.description,
            icon: this.state.weatherByCity.icon,
            temperature: this.state.weatherByCity.weather.temperature,
            country: this.state.weatherByCity.country,
            date: this.state.weatherByCity.date.date,
            hour: this.state.weatherByCity.date.hour
        });
        this.setState({ isFavorite: true })
    }

    onSearch = async (city) => {
        const weatherByCity = await weatherService.getWeatherByCity(city);
        this.setState({ weatherByCity: weatherByCity });
        this.setState({ isFavorite: false })
    }

    render() {
        return (
            <div>
                <Header />
                <main>
                    <div className="search">
                        <div className="searchBar-container">
                            <Search placeholder="Saisir une ville" onSearch={this.onSearch} enterButton className="searchBar" />
                        </div>
                        {this.state.weatherByCity && (
                            <div className="searchBar-container">
                                <CardSearch
                                    country={this.state.weatherByCity.country}
                                    city={this.state.weatherByCity.city}
                                    date={this.state.weatherByCity.date.date}
                                    hour={this.state.weatherByCity.date.hour}
                                    temperature={this.state.weatherByCity.weather.temperature}
                                    description={this.state.weatherByCity.weather.description}
                                    icon={this.state.weatherByCity.icon}
                                    fav={this.state.isFavorite ? <StarFilled /> : <StarOutlined onClick={() => this.handleFavorite()} />}
                                />
                            </div>
                        )}
                    </div>
                </main>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addFavorite: (favorite) => dispatch(addFavorite(favorite)),

    }
}

const mapStateToProps = state => {
    return {
        listOfFavorites: state.favorites.listOfFavorites,
        isFavorite: state.favorites.isFavorite
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);