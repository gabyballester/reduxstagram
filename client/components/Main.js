import React from "react"; // imr snippet
// importamos desde el router
import { Link } from "react-router";

// cc snippet
const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    },
});

export default Main;