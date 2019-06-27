import React from 'react';
import {withRouter} from 'react-router-dom'


const Button = (props) => {
    const cls = [
        'btn',
        props.type
    ]
    return (
        <button 
        className={cls.join(' ')}
        onClick={props.clickHandler}
        hidden={!props.hidden}>
            {props.children}
        </button>
    );
}

export default withRouter(Button);
