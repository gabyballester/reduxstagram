// importaciones necesarias
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// importamos los reducers a combinar
import postsReducer from './reducers/posts';
import commentsReducer from './reducers/comments';

// combinamos
const rootReducer = combineReducers({
    postsReducer,
    commentsReducer,
    router: routerReducer
});

export default rootReducer; // exportamos