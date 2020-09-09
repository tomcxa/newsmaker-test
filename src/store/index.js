import {
    createStore,
    combineReducers,
} from 'redux';
import newsReducer from '../reducers/newsReducer';
import createNewsReducer from '../reducers/createNewsReducer';
import authReducer from '../reducers/authReducer';

const reducer = combineReducers({
    news: newsReducer,
    createNews: createNewsReducer,
    auth: authReducer,
});

const store = createStore(reducer);

export default store