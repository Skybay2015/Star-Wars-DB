import React from 'react';
import classes from './items-list.module.sass';
import Loader from '../UI/Loader/Loader';
import Button from '../../components/UI/Button/Button';


const ItemsList = props => { 
    const listItems = props.list.map((item, i) => (
    <li 
    key={item.name + i + Math.random()} 
    onClick={()=> props.clickHandler(i)}>
        {item.name}
    </li>
    ))
        return (
            <React.Fragment>
                {listItems.length !== 0 ? (
                    <div style={{maxWidth: '50%', width:'100%'}}>
                        <ul
                            className={`${
                                classes.itemsList
                            } jumbotron`}>
                            {listItems}
                        </ul>
                        <Button
                            type='btn-warning'
                            clickHandler={props.onLoadMore}
                            hidden={props.isNextPage}>
                            Load More
                        </Button>
                    </div>
                ) : (
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '30%',
                        }}>
                        <Loader />
                    </div>
                )}
            </React.Fragment>
        );
}

export default ItemsList;
