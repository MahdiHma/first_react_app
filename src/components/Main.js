import React, {Component} from "react"
import Title from "./Title";
import PhotoWall from "./PhotoWall";

class Main extends Component {
    render() {
        return <div>
            <Title title={this.props.title}/>
            <PhotoWall photos={this.props.photos}/>
        </div>
    }

}

export default Main