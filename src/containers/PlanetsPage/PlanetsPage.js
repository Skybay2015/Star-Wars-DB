import React, { Component } from 'react';
import ItemsList from '../../components/item-list/items-list';
import PlanetDetails from '../../components/planet-details/planet-details';
import {connect} from 'react-redux'
import { getAllPlanets, choosePlanet } from '../../Store/actions/planets';


class PlanetsPage extends Component {
    constructor(props) {
        super(props);
        if(this.props.initialLoading) {
            this.getAllPlanets();
        }   
    }

    getAllPlanets(page = null) {
        this.props.getAllPlanets(page)
    }

    choosePlanetHandler = (i) => {
        const choosenPlanet = this.props.planets[i];
        
        this.props.choosePlanet(choosenPlanet)
    };

    loadMoreHandler = () => {
        this.getAllPlanets(this.props.nextPage);
    };

    render() {
        const { choosenPlanet } = this.props;
        return (
            <React.Fragment>
                <ItemsList
                    clickHandler={this.choosePlanetHandler}
                    list={this.props.planets}
                    onLoadMore={this.loadMoreHandler}
                    isNextPage={!!this.props.nextPage}
                />
                <PlanetDetails
                    id={choosenPlanet.id}
                    name={choosenPlanet.name}
                    population={choosenPlanet.population}
                    diameter={choosenPlanet.diameter}
                    rotationPeriod={choosenPlanet.rotationPeriod}
                />
            </React.Fragment>
        );
    }
}

function mapStateToProps (state) {
    return {
        planets: state.planets.planets,
        choosenPlanet: state.planets.choosenPlanet,
        nextPage: state.planets.nextPage,
        initialLoading: state.planets.initialLoading
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getAllPlanets: page => dispatch(getAllPlanets(page)),
        choosePlanet: planet => dispatch(choosePlanet(planet))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsPage);
