import React, {Component} from "react"
import List from "./List";
import Title from "./Title";
import PhotoWall from "./PhotoWall";

class Main extends Component {
    render() {
        return <div>
            <Title title={this.props.title}/>
            {/*<List li={this.props.li}/>*/}
            <PhotoWall photos={this.props.photos}/>
        </div>
    }

}

export default Main