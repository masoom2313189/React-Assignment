import React from "react";
import Image from "./Image";

export default class ImageList extends React.Component {
  // Lifecycle method to prevent re render of the list if some spaces are present

  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image, index) => {
          return <Image key={index} image={image} />;
        })}
      </div>
    );
  }
}
