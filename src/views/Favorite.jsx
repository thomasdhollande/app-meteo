import { Component } from "react";
import { connect } from "react-redux"
import { removeFavorite } from "../store/reducers/favoriteReducer"
import '../App.css';
import CardFavorite from "../components/cardFavorite";
import { StarFilled } from '@ant-design/icons';
import Header from "../components/Header";

class Favorites extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listOfFavorites: [],
        }
    }

    componentDidMount = () => {
        this.setState({ listOfFavorites: this.props.listOfFavorites })
    }

    handleFavorite = (index) => {
        this.props.removeFavorite(index);
    }

    componentDidUpdate(prevProps) {
        if (this.props.listOfFavorites !== prevProps.listOfFavorites) {
            this.setState({ listOfFavorites: this.props.listOfFavorites })
            return true
        }
        return false
    }

    render() {
        return (
            <div>
                <Header />
                <main>
                    <div className="favorite">
                        <h2>Favoris</h2>
                        <div className="favorite-container">
                            {this.state.listOfFavorites.map((favorite, index) => {
                                return (
                                    <div>
                                        <CardFavorite
                                            key={index}
                                            country={favorite.country}
                                            city={favorite.city}
                                            description={favorite.description}
                                            icon={favorite.icon}
                                            date={favorite.date}
                                            hour={favorite.hour}
                                            temperature={favorite.temperature}
                                            fav={<StarFilled onClick={() => this.handleFavorite(index)} />}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </main>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        listOfFavorites: state.favorites.listOfFavorites,
        isFavorite: state.favorites.isFavorite
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFavorite: (favorite) => dispatch(removeFavorite(favorite))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);