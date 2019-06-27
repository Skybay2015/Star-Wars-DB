import React from 'react';
import classes from './startship-details.module.sass'
import Img from '../UI/Img/Img';

const StarShipDetails = (props) => {
    return (
        <React.Fragment>
            {props.id && (
                <div className={`${classes.StarshipDetails}  jumbotron`}>
                    <Img
                        className={classes.starship_image}
                        name={props.name}
                        type='starships'
                        id={props.id}
                    />
                    <div>
                        <h2>{props.name}</h2>
                        <p>Model: {props.model}</p>
                        <p>Hyperdrive Rating: {props.hyperdriveRating}</p>
                        <p>Cost In Credits: {props.costInCredits}</p>
                        <p>Passengers: {props.passengers}</p>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default StarShipDetails;
