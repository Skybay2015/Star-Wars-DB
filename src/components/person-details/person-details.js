import React from 'react';
import classes from './person-details.module.sass'
import Img from '../UI/Img/Img';

const PersonDetails = (props) => {
    return (
        <React.Fragment>
            {props.id && (
                <div className={`${classes.PersonDetails}  jumbotron`}>
                    <Img
                        className={classes.person_image}
                        name={props.name}
                        type='characters'
                        id={props.id}
                    />
                    <div>
                        <h2>{props.name}</h2>
                        <p>Gender: {props.gender}</p>
                        <p>Birth Year: {props.birthYear}</p>
                        <p>Eye Color: {props.eyeColor}</p>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default PersonDetails;
