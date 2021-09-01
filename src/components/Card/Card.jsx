import React, {useEffect, useState} from 'react';
import firebase from '../../services/firebase';
import bd from "firebase";
import {AiOutlineDelete, IoIosHeartEmpty} from "react-icons/all";

const Card = (props) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [fileURL, setFileURL] = useState(null)
    const [pokemon, setPokemon] = React.useState([])

    const handleOnChange = (e) => {
        setName(e.target.value)
    }

    const handleOnChangeDesc = (e) => {
        setDescription(e.target.value)
    }

    const onFileChange = async (e) => {
        const file = e.target.files[0]
        const storageRef = bd.storage().ref('Pokemon')
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileURL(await fileRef.getDownloadURL())
    }

    const createPokemon = () => {
        const pokemonRef = firebase.database().ref('Pokemon');
        const pokemon = {
            name,
            description,
            fileURL
        }
        pokemonRef.push(pokemon)
    }

    const deletePokemon = () => {
        debugger;
        const pokemonRef = firebase.database().ref('Pokemon').child(pokemon.id);
        pokemonRef.remove();
    };

    useEffect(() => {
        const pokemonRef = firebase.database().ref('Pokemon');
        pokemonRef.on('value', (snapshot) => {
            const pokemon = snapshot.val();
            const pokemonList = [];
            for (let id in pokemon) {
                pokemonList.push({id, ...pokemon[id]});
            }
            setPokemon(pokemonList);
        });
    }, []);

    return (
        <>
            <div className="text">
                <h2>Pokemon Cards</h2>
                <p>Pokémon is a series of video games developed by Game Freak
                    and published by Nintendo and The Pokémon Company under
                    the Pokémon media franchise</p>
            </div>
            <div className="cards">
                <div className="add_card">
                    <div className="wrapper">
                        <div className="card_item">
                            <h5>Pokemon image:</h5>
                            <input type="file"
                                   onChange={onFileChange}/>
                        </div>
                        <div className="card_item">
                            <h5>Pokemon name:</h5>
                            <input type="text"
                                   onChange={handleOnChange}
                                   value={name}
                                   placeholder="name"/>
                        </div>
                        <div className="card_item">
                            <h5>Pokemon description:</h5>
                            <input type="text"
                                   onChange={handleOnChangeDesc}
                                   value={description}
                                   placeholder="description"/>
                        </div>
                        <button onClick={createPokemon} className="btn">Add Pokemon</button>
                    </div>
                </div>
                {
                    pokemon.map((p, index) => {
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
                                        <IoIosHeartEmpty onClick={() => props.addFavorite(p)}/>
                                        <AiOutlineDelete onClick={deletePokemon}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );

}

export default Card