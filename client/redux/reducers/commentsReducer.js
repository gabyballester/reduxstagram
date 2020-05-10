// Función principal del reducer
function commentsReducer(state = [], action) {
    // comprobamos si el item está
    if (typeof action.postId !== 'undefined') {
        return {
            // cogemos el state actual
            ...state,
            // sobrerescribimos this post con uno nuevo
            [action.postId]:

                postComments(state[action.postId], action)
        }
    }
    return state;
}

// Función sedundaria del reducer
function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT': //esto viene de actionCreators.js
            // devolvemos el actual state con el nuevo comentario
            return [...state, {//hacemos copia del state
                user: action.author, // agregamos user
                text: action.comment // agregamos text
            }];
        case 'REMOVE_COMMENT': //esto viene de actionCreators.js
        console.log('Borrando un comentario');
        
            return state;
        default:
            return state;
    }
    return state;
}

export default commentsReducer;