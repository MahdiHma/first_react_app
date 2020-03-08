import React, {Component} from "react"
import List from "./List";
import Title from "./Title";

class Main extends Component {
    render() {
        return <div>
            <Title title={this.props.title}/>
            <List li={this.props.li}/>
        </div>
    }

}

export default Main