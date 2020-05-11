import React from "react"; // imr snippet
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
    render() {
        const { posts, comments, params } = this.props;
        const { postId } = params;
        // indice de post que coincida con el param enviado
        const i = posts.findIndex(
            (post) => post.code === postId);
        // recuperamos el post que corresponda a ese i
        const post = posts[i]; // sacar sólo ese post
        // recuperamos todos los comentarios
        const postComments = comments[postId] || [];

        return (
            <div className="single-photo">
                {/* pasamos i post y el resto de props con spread */}
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props}/>
            </div>
        );
    },
});

export default Single;