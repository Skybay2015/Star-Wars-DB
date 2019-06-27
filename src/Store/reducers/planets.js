import { FETCH_PLANETS_SUCCESS, CHOOSE_PLANET } from "../actions/actionTypes";

const initialState = {
    planets: [],
    choosenPlanet: {},
    nextPage: 1,
    initialLoading: true
};

export default function peopleReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PLANETS_SUCCESS:
            return {
                ...state,
                planets: [...state.planets, ...action.planets],
                nextPage: action.nextPage,
                initialLoading: false
            };
        case CHOOSE_PLANET:
            return {
                ...state,
                choosenPlanet: action.choosenPlanet,
            };
        default:
            return state;
    }
}
