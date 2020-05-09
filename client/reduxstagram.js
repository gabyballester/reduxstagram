import React from 'react'; // imr snippet

import {render} from 'react-dom' //importamos render

// importamos css
import css from './styles/style.styl'

// Import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// importamos de router lo necesario para configurarlo
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// creamos un route component para renderizar
const router  = (
    <Router history = {browserHistory}>
        <Route path="/" component={Main}> // Ruta raíz
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
)

// Creamos el render de la app y lo inyectamos en root (index.html)
// Renderizamos Main
render(router, document.getElementById('root'));