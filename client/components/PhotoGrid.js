import React from "react"; // imr snippet
import Photo from './Photo'; // importamos componente hijo

// cc snippet
const PhotoGrid = React.createClass({
    render() {
        return (
            <div className="photo-grid">
                {/* mapeamos posts pasando post e indice -> i*/}
                {this.props.posts.map((post, i) =>
                    // pasamos el state por los props con spread
                    // Le pasamos las propiedades necesarias
                    <Photo {...this.props} key={i} i={i} post={post} />)}
            </div>
        );
    },
});

export default PhotoGrid;