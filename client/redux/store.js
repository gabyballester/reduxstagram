//importaciones de redux
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// importamos al root reducer
import rootReducer from './reducers/indexReducer';

// importamos datos por defecto para mostrar
import posts from '../data/posts';
import comments from '../data/comments';

// creamos un estado por defecto con estos datos
const defaultState = {
    // podemos darles un nombre distinto
    posts: posts,
    comments: comments
}

// creamos la constante store
const store = createStore(rootReducer, defaultState);

// exportamos constante history para controlar el navegador
export const history = syncHistoryWithStore(browserHistory, store);

// exportamos por defecto store
export default store;