import React, { Component } from 'react';
import ItemsList from '../../components/item-list/items-list';
import PersonDetails from '../../components/person-details/person-details';
import {connect} from 'react-redux'
import { getAllPeople, chooseCharacter } from '../../Store/actions/people';


class PeoplePage extends Component {
    constructor(props) {
        super(props);

        if (this.props.initialLoading) {
            this.getAllPeople();
        }  
    }

    getAllPeople(page = null) {
        this.props.getAllPeople(page)
    }

    chooseCharacterHandler = (index) => {
        const person = this.props.people[index];

        this.props.chooseCharacter(person)
    };

    loadMoreHandler = () => {
        this.getAllPeople(this.props.nextPage);
    };

    render() {
        const { people } = this.props;
        return (
            <React.Fragment>
                <ItemsList
                    list={people}
                    clickHandler={this.chooseCharacterHandler}
                    onLoadMore={this.loadMoreHandler}
                    isNextPage={!!this.props.nextPage}
                />
                <PersonDetails
                    id={this.props.person.id}
                    name={this.props.person.name}
                    gender={this.props.person.gender}
                    birthYear={this.props.person.birthYear}
                    eyeColor={this.props.person.eyeColor}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        people: state.people.people,
        person: state.people.person,
        nextPage: state.people.nextPage,
        initialLoading: state.people.initialLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPeople: page => dispatch(getAllPeople(page)),
        chooseCharacter: person => dispatch(chooseCharacter(person))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage);
