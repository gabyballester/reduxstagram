// importaciones necesarias
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// importamos los reducers a combinar
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';

// combinamos
const rootReducer = combineReducers({
    // Los campos tienen que llamarse igual que los del store por defecto
    posts: postsReducer,
    comments: commentsReducer,
    routing: routerReducer
});

export default rootReducer; // exportamos