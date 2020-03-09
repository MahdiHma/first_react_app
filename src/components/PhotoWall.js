import React, {Component} from "react";
import Photo from "./Photo";


class PhotoWall extends Component {
    render() {
        return <div className={"PhotoGrid"}>
            {this.props.photos.map((photo, index) => <Photo photo={photo} key={index}/>)}
        </div>
    }
}

export default PhotoWall;