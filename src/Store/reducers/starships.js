import { FETCH_STARSHIPS_SUCCESS, CHOOSE_STARSHIP } from '../actions/actionTypes';

const initialState = {
    starships: [],
    choosenStarship: {},
    nextPage: 1,
    initialLoading: true,
};

export default function peopleReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_STARSHIPS_SUCCESS:
            return {
                ...state,
                starships: [...state.starships, ...action.starships],
                nextPage: action.nextPage,
                initialLoading: false
            };
        case CHOOSE_STARSHIP:
            return {
                ...state,
                choosenStarship: action.choosenStarship,
            };
        default:
            return state;
    }
}
