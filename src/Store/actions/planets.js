import SwapiService from '../../services/swapi';
import { FETCH_PLANETS_SUCCESS, CHOOSE_PLANET } from './actionTypes';

const swapi = new SwapiService();

export function getAllPlanets(page) {
    return async (dispatch) => {
        await swapi.getAllPlanets(page).then((planets) => {
            if (planets) {
                dispatch(
                    fetchPlanetsSuccess(planets.planetsData, planets.nextPage),
                );
            }
        });
    };
}

export function choosePlanet(choosenPlanet) {
    return {
        type: CHOOSE_PLANET,
        choosenPlanet,
    };
}

export function fetchPlanetsSuccess(planets, nextPage) {
    return {
        type: FETCH_PLANETS_SUCCESS,
        planets,
        nextPage,
    };
}
