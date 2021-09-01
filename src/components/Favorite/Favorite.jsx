import React from "react";
import "./../Card/Card.css"
import {AiFillDelete, IoIosHeart} from "react-icons/all";

class Favorite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <div className="text">
                    <h2>My Favorite Pokemon Cards</h2>
                    <p>Pokémon is the world's largest media franchise, with successful
                        anime series, movies, and merchandise, with spin-off game Pokémon
                        Go having crossed 1 billion mobile game downloads worldwide</p>
                </div>
                <div className="cards">
                    {this.props.favorites.map((p, index) => {
                        return (
                            <div className='card' key={index}>
                                <div className="wrapper">
                                    <div className="card_img">
                                        <img src={p.fileURL} alt=""/>
                                    </div>
                                    <div className="card_name">
                                        <h5>Pokemon name:</h5>
                                        <h4>{p.name}</h4>
                                    </div>
                                    <div className="card_description">
                                        <h5>Description:</h5>
                                        <p>{p.description}</p>
                                    </div>
                                    <div className="widget">
                                        <IoIosHeart/>
                                        <AiFillDelete/>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}

export default Favorite