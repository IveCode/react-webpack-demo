import { combineReducers } from 'redux';
import counterReducer from './count_reducer';
import postReducer from './post_reducer';

const rootReducers = combineReducers({
    counter: counterReducer,
    post: postReducer
})


export default rootReducers;