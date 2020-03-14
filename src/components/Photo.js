import React, {Component} from "react";
import PropTypes from 'prop-types'

class Photo extends Component {
    render() {
        const photo = this.props.photo;
        return <figure className={"figure"}>
            <img className={"photo"} src={photo.imageLink} alt={photo.description}/>
            <figcaption>
                <p>
                    {photo.description}
                </p>
                <div className={"button-container"}>
                    <button className={"remove-button"} onClick={() => {
                        this.props.onRemove(photo)
                    }}> Remove
                    </button>
                </div>

            </figcaption>
        </figure>
    }

}

Photo.propTypes = {
    photo: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired
};
export default Photo;