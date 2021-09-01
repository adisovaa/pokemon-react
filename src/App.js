import React from 'react';
import './App.css';
import NavBar from "./components/Navbar/NavBar";
import {Route} from "react-router-dom";
import Card from "./components/Card/Card";
import Favorite from "./components/Favorite/Favorite";

class App extends React.Component {
    state = {
        favorites: []
    }

    addFavorite = favorite => {
        const {favorites} = this.state;

        if (!favorites.some(alreadyFavorite => alreadyFavorite.id === favorite.id)) {
            this.setState({
                favorites: [...this.state.favorites, favorite]
            });
        }
    };

    render() {
        return (
            <div className='app-wrapper'>
                <NavBar/>
                <Route path="/"
                       exact render={() => (<Card addFavorite={this.addFavorite}/>)}
                />
                <Route path="/favorites"
                       render={() => <Favorite favorites={this.state.favorites}/>}
                />
                <footer>
                    <h2>CopyRight Pokemon 2021</h2>
                </footer>
            </div>
        );
    }
}

export default App