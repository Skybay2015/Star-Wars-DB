import React from 'react';
import classes from './planet-details.module.sass';
import Img from '../UI/Img/Img';


const PlanetDetails = (props) => {
    return (
        <React.Fragment>
            {props.id && (
                <div className={`${classes.PlanetDetails}  jumbotron`}>
                    <Img
                        className={classes.planet_image}
                        name={props.name}
                        type='planets'
                        id={props.id}
                    />
                    <div>
                        <h2>{props.name}</h2>
                        <p>Population: {props.population}</p>
                        <p>Rotation period: {props.rotationPeriod}</p>
                        <p>Diameter: {props.diameter}</p>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default PlanetDetails;
