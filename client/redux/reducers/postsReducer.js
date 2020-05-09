// Un reducer recibe 2 cosas
//i.  La acción
//ii. Una copia del estado actual del objeto

function postsReducer(state=[], action){
console.log(state, action);
return state;
}

export default postReducer;