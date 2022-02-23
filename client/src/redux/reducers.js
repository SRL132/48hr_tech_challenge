import { combineReducers } from 'redux';
import itemReducer from './items/reducer';
import filterReducer from './filter/reducer';
import userReducer from './user/reducer';

const reducers = combineReducers({
    user: userReducer,
    items: itemReducer,
    filters: filterReducer

});

export default reducers;