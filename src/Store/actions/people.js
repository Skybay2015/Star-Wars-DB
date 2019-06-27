import SwapiService from '../../services/swapi';
import { FETCH_PEOPLE_SUCCESS, CHOOSE_CHARACTER } from './actionTypes';

const swapi = new SwapiService();

export function getAllPeople(page) {
    return async (dispatch) => {
        await swapi.getAllPeople(page).then((people) => {
            if (people) {
                dispatch(
                    fetchPeopleSuccess(people.peopleData, people.nextPage),
                );
            }
        });
    };
}

export function chooseCharacter (person) {
   return { 
    type: CHOOSE_CHARACTER,
    person
   }
}

export function fetchPeopleSuccess (people, nextPage) {
    return {
        type: FETCH_PEOPLE_SUCCESS,
        people,
        nextPage
    }
}