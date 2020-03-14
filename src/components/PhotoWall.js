import React, {Component} from "react";
import Photo from "./Photo";
import PropTypes from 'prop-types';

class PhotoWall extends Component {

    render() {
        return <div className={"PhotoGrid"}>
            {this.props.posts.map((photo, index) => <Photo photo={photo} key={index} onRemove={this.props.onRemove}/>)}
        </div>
    }
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired
};
export default PhotoWall;