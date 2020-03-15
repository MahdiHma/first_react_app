import React, {Component} from "react"
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import {Route} from 'react-router-dom'

class Main extends Component {
    constructor() {
        super();
        this.state = {
            posts: [{
                id: "0",
                description: "beautiful landscape",
                imageLink: "https://images.daznservices.com/di/library/GOAL_INTERNATIONAL/25/31/zinedine-zidane-marco-materazzi_jsqpsqv4qazr1qflhuty2ajxj.jpg?t=-837723403&quality=60&w=1600"
            }, {
                id: "1", description: "Aliens???",
                imageLink: "https://statics.sportskeeda.com/wp-content/uploads/2014/09/pele-1410770155.jpg"
            }, {
                id: "2",
                description: "On a vacation!",
                imageLink: "https://cdni0.trtworld.com/w960/h540/q75/34315_20180526T212336Z_593109824_RC14528151B0_RTRMADP_3_SOCCERCHAMPIONSMADLIV_1527765516807.JPG"
            }],
        };
        this.removePost = this.removePost.bind(this);
    }

    removePost(postRemoved) {
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    render() {
        console.log(this.state.posts);
        return <div>
            <Route exact path={"/"} render={() =>
                <div>
                    <Title title={this.props.title}/>
                    <PhotoWall posts={this.state.posts} onRemove={this.removePost} onNavigate={this.navigate}/>
                </div>
            }/>
            <Route path={"/addPhoto"} component={AddPhoto}/>

        </div>
    }

}

export default Main