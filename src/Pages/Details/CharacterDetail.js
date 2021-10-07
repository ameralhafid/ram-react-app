import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";


export function CharacterByID({ character }) {

    let favArr = JSON.parse(localStorage.getItem('fav')) || [];
    favArr.push(character.id);
    localStorage.setItem('fav', JSON.stringify(favArr));

    return (

            <div className="characters">
                <div className="image">
                    <img alt={character.name} src={character.image}  />
                </div>
                <div  className="title">
                    <h3>Name: {character.name}</h3>
                    <h3 className="title">  Gender: {character.gender}</h3>
                    <h3 className="title">  Type: {character.type}</h3>
                    <h3>  Species: {character.species}</h3>
                    <h3>Status: {character.status}</h3>
                    <h4 className="title"> All Episodes with "{character.name}":</h4>
                </div>





                     {character.episode.map((e) =>

                     <div className="media">

                    <div className="subTitle">

                        <Button  disableElevation>
                            <Link exact to={`/episode/${e.id}`}>
                            {e.name}
                            </Link>
                        </Button>
                        </div>
                        </div>
                )}






            </div>


    )
}
