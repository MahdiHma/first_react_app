import React, {Component} from "react";
import Photo from "./Photo";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class PhotoWall extends Component {

    render() {
        return <div>
            <Link className={'add-item'} to={"/addPhoto"}/>
            <div className={"PhotoGrid"}>
                {this.props.posts.map((photo, index) => <Photo photo={photo} key={index}
                                                               onRemove={this.props.onRemove}/>)}
            </div>
        </div>
    }
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
};
export default PhotoWall;