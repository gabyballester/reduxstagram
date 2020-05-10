function postsReducer(state = [], action) {

    switch (action.type) {
        case 'INCREMENT_LIKES':
            console.log('Like aumentado');
            const i = action.index; // recuperamos el index de la action
            //devolvemos estado actualizado
            return [ 
                // creamos copia del state con spread
                ...state.slice(0,i), // antes de actualizar
                {...state[i], likes: state[i].likes+1},
                ...state.slice(1+i), // después de actualizar
            ]
        default: return state;
    }
}

export default postsReducer;