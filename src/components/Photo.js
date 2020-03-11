import React, {Component} from "react";

class Photo extends Component {
    render() {
        const photo = this.props.photo;
        return <figure className={"figure"}>
            <img className={"photo"} src={photo.imageLink} alt={photo.description}/>
            <figcaption>
                <p>
                    {photo.description}
                </p>
                <div>
                    <button> Remove</button>
                </div>

            </figcaption>
        </figure>
    }

}

export default Photo;