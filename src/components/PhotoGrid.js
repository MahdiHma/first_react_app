import React, {Component} from "react";
import Photo from "./Photo";


class PhotoGrid extends Component {
    render() {
        return <div>
            {this.props.photos.map((photo, index) => <Photo photo={photo}/> )}
        </div>
    }
}

export default PhotoGrid;