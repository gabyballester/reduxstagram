import React from 'react'; // imr snippet

import { render } from 'react-dom' //importamos render

// importamos css
import css from './styles/style.styl'

// Import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Importamos de router lo necesario para configurarlo
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// Importamos provider
import { Provider } from 'react-redux';
// Importamos store y history, tal como los exportamos en store.js
import store, { history } from './redux/store';
//Nota: El default export no necesita {}, pero el que no lleva default, si.

// creamos constante con un router component para renderizar
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>  {/* Ruta raíz */}
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

// Creamos el render de la app y lo inyectamos en root (index.html)
// Renderizamos Main
render(router, document.getElementById('root'));