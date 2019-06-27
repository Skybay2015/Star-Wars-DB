import {combineReducers} from 'redux'
import peopleReducer from './people';
import planetsReducer from './planets'
import starshipsReducer from './starships'


export default combineReducers({
    people: peopleReducer,
    planets: planetsReducer,
    starships: starshipsReducer
})