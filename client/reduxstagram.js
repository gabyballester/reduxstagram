import React from 'react'; // imr snippet

import {render} from 'react-dom' //importamos render

// importamos css
import css from './styles/style.styl'

// Import components
import Main from './components/Main';

// Creamos el render de la app y lo inyectamos en root (index.html)
// Renderizamos Main
render(<Main/>, document.getElementById('root'));