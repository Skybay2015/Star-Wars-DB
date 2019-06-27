import React, { Component } from 'react';
import ItemsList from '../../components/item-list/items-list'
import StarShipDetails from '../../components/starship-details/startship-details';
import { connect } from 'react-redux';
import { getAllStarships, chooseStarship } from '../../Store/actions/starships';



class StarShipsPage extends Component {
    constructor(props) {
        super(props);
        
        if(this.props.initialLoading) { 
            this.getAllStarships();
        }
        
    }

    getAllStarships(page = null) {
       this.props.getAllStarships(page)
    }

    chooseStarshipHandler = (i) => {
        const choosenStarship = this.props.starships[i];

        this.props.chooseStarship(choosenStarship)
    };

    loadMoreHandler = () => {
        this.getAllStarships(this.props.nextPage);
    };

    render() {
        const { choosenStarship } = this.props;
        return (
            <React.Fragment>
                <ItemsList
                    clickHandler={this.chooseStarshipHandler}
                    list={this.props.starships}
                    onLoadMore={this.loadMoreHandler}
                    isNextPage={!!this.props.nextPage}
                />

                <StarShipDetails
                    id={choosenStarship.id}
                    name={choosenStarship.name}
                    costInCredits={choosenStarship.costInCredits}
                    hyperdriveRating={choosenStarship.hyperdriveRating}
                    model={choosenStarship.model}
                    passengers={choosenStarship.passengers}
                />
            </React.Fragment>
        );
    }
}

function mapStateToProps (state) {
    return{ 
        starships: state.starships.starships,
        choosenStarship: state.starships.choosenStarship,
        nextPage: state.starships.nextPage,
        initialLoading: state.starships.initialLoading
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getAllStarships: page => dispatch(getAllStarships(page)),
        chooseStarship: starship => dispatch(chooseStarship(starship))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StarShipsPage);
