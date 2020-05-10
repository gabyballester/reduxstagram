import React from "react"; // imr snippet
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
    render() {
        // indice de post que coincida con el param enviado
        const i = this.props.posts.findIndex(
            (post) => post.code === this.props.params.postId);
        // recuperamos el post que corresponda a ese i
        const post = this.props.posts[i];
        return (
            <div className="single-photo">
                {/* pasamos i post y el resto de props con spread */}
                <Photo i={i} post={post} {...this.props} />
                <Comments />
            </div>
        );
    },
});

export default Single;