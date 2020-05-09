import React from 'react'; // imr snippet

import {render} from 'react-dom' //importamos render

// importamos css
import css from './styles/style.styl'

// Creamos el render de la app y lo inyectamos en root (index.html)
render(<p>Hola</p>, document.getElementById('root'));