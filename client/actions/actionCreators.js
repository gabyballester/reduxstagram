//método para incremento de likes
export function increment(index) { // le pasamos el identificador del post
    return {
        type: 'INCREMENT_LIKES', //indica la acción a ejecutar
        index
    }
}

// método agregar comentarios
export function addComment(postId, author, comment) { // pasamos el post, el autor y el comentario
    return {
        type: 'ADD_COMMENT', //indica la acción a ejecutar
        // devolvemos los mismos datos que pasamos por parámetro
        postId,
        author,
        comment
    }
}


//método para borrar comentario
export function removeComment(postId, i) { // paamos el postId y el comentario
    return {
        type: 'REMOVE_COMMENT', //indica la acción a ejecutar
        // devolvemos el postId y el comentario a borrar
        i, postId
    }
}