import React, {Component} from "react";
import Photo from "./Photo";


class PhotoWall extends Component {


    render() {
        return <div className={"PhotoGrid"}>
            {this.props.posts.map((photo, index) => <Photo photo={photo} key={index} onRemove={this.props.onRemove}/>)}
        </div>
    }
}

export default PhotoWall;