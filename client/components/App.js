// importaciones necesarias
import {bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators';

// importación de componentes
import Main from './Main';

// función state to props
function mapStateToProps(state) { //pasamos el state
    return {
        posts: state.posts,
        comments: state.comments
    }
}

//función dispatch to props
function mapDispatchToProps(dispatch) { //pasamos el dispatch
    return bindActionCreators(actionCreators, dispatch); //
}

// Conectamos y pasamos las dos funciones e inmediatamente, llamamos a Main
const App = connect(mapStateToProps, mapDispatchToProps)(Main);
// Nota: esto lo que hace es que le pasa a Main la conexión con es

// exportamos App para hacerlo disponible a toda la app
export default App;