import React from 'react';

const Img = (props) => (
        <img
            className={props.className}
            alt={props.name}
            src={`https://starwars-visualguide.com/assets/img/${props.type}/${
                props.id
            }.jpg`}
            onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                    'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
            }}
        />
    );


export default Img;
