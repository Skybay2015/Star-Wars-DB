import { FETCH_PEOPLE_SUCCESS, CHOOSE_CHARACTER } from "../actions/actionTypes";

const initialState = {
    people: [],
    person: {},
    nextPage: 1,
    initialLoading: true,
};

export default function peopleReducer (state = initialState, action) {
    switch(action.type) {
        case FETCH_PEOPLE_SUCCESS:
        return {
            ...state,
            people: [...state.people, ...action.people],
            nextPage: action.nextPage,
            initialLoading: false
        } 
        case CHOOSE_CHARACTER:
        return {
            ...state, 
            person: action.person
        }
        default: 
        return state
    }
}