import React from 'react';
import classes from './random-planet.module.sass'
import Loader from '../UI/Loader/Loader';
import Img from '../UI/Img/Img';



const RandomPlanet = (props) => {
    const img = (
        <Img
            id={props.id}
            className={classes.planet_image}
            type='planets'
            name={props.alt}
        />
    );
    return (
        <React.Fragment>
            {props.id ? (
                <div className={`${classes.random_planet} jumbotron`}>
                    {img}
                    <div className={classes.random_planet__info}>
                        <h2>{props.name}</h2>
                        <p>Population: {props.population}</p>
                        <p>Rotation period: {props.rotation}</p>
                        <p>Diameter: {props.diameter}</p>
                    </div>
                </div>
            ) : (
                <div style={{ textAlign: 'center' }}>
                    <Loader />
                </div>
            )}
        </React.Fragment>
    );
};


export default RandomPlanet;
