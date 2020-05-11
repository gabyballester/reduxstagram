import React from 'react';

const Comments = React.createClass({
    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong> {comment.user} </strong> {comment.text}
                    <button
                        onClick={this.props.removeComment.bind(
                            null, this.props.params.postId, i)}
                        className="remove-comment">
                        &times;
                    </button>
                </p>
            </div>
        );
    },
    handleSubmit(e) {
        e.preventDefault(); // esto evita que la web refresque
        const { postId } = this.props.params; //recuperamos el postId de props
        const author = this.refs.author.value; // esto recupera el input
        const comment = this.refs.comment.value; // esto recupera el input
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    },
    render() {
        const { postComments } = this.props;
        return (
            <div className="comment">
                {/* llamará a la función tantas veces como comentarios haya */}
                {postComments.map(this.renderComment)}
                <form onSubmit={this.handleSubmit}
                    ref="commentForm" className="commment-form">
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    },
});

export default Comments;
