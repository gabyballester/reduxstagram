import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
    render() {
        // recuperamos constantes desde this.props para simplificar código
        const { post, i, comments } = this.props;
        return (
            <figure className="grid-figure">

                <div className="grid-photo-wrap">

                    <Link to={`/view/${post.code}`}>
                        <img src={post.display_src} alt={post.caption}
                            className="grid-photo"
                        />
                    </Link>

                    <CSSTransitionGroup transitionName="like"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        <span key={post.likes} className="likes-heart"
                        >{post.likes}</span>
                    </CSSTransitionGroup>

                </div>

                {/* bloque de caption con botones de control */}
                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">

                        {/* botón like */}
                        <button onClick={this.props.increment.bind(null, i)}
                        className="likes">&hearts; {post.likes}</button>
                        {/* fin botón like */}

                        {/* botón comments */}
                        <Link className="button" to={`/view/${post.code}`}>
                            <span className="comment-count">
                                <span className="speech-bubble"></span>
                                {/* Si existe el comentario muestro el tamaño o 0 */}
                                {comments[post.code] ? comments[post.code].length : 0}
                            </span>
                        </Link>
                        {/* fin botón comments */}
                    </div>
                </figcaption>

            </figure>
        )
    }
});

export default Photo;