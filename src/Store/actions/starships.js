import SwapiService from '../../services/swapi';
import { FETCH_STARSHIPS_SUCCESS, CHOOSE_STARSHIP } from './actionTypes';

const swapi = new SwapiService();

export function getAllStarships(page) {
    return async (dispatch) => {
        await swapi.getAllStarships(page).then((starships) => {
            if (starships) {
                dispatch(
                    fetchStarshipsSuccess(starships.starshipsData, starships.nextPage),
                );
            }
        });
    };
}

export function chooseStarship(choosenStarship) {
    return {
        type: CHOOSE_STARSHIP,
        choosenStarship,
    };
}

export function fetchStarshipsSuccess(starships, nextPage) {
    return {
        type: FETCH_STARSHIPS_SUCCESS,
        starships,
        nextPage,
    };
}
