import React from "react";
import ImageList from "./components/ImageList";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      imageUrl: ""
    };
  }

  // Function to get images from the local storage
  getImagesFromLS = () => {
    const images = localStorage.getItem("images");
    if (!images) {
      localStorage.setItem("images", "[]");
      return [];
    }
    return JSON.parse(images);
  };

  // Event handler for input field change
  onImageUrlChange = (e) => {
    this.setState({ imageUrl: e.target.value });
  };


  // Event handler for form submission
  onAddImage = (e) => {
    e.preventDefault();

    // Check if the URL contains spaces or has a length less than five characters
    if (this.state.imageUrl.includes(" ") || this.state.imageUrl.trim().length < 5) {
      return;
    }

    this.setState(
      (prevState) => ({
        images: [...prevState.images, prevState.imageUrl],
        imageUrl: ""
      }),
      () => {
        this.addImageToLS();
      }
    );
  };

  // Function to add image to local storage
  addImageToLS = () => {
    localStorage.setItem(
      "images",
      JSON.stringify([...this.state.images, this.state.imageUrl])
    );
  };

  componentDidMount() {
    const imageArray = this.getImagesFromLS();
    this.setState({ images: imageArray });
  }

  render() {
    return (
      <>
        <form onSubmit={this.onAddImage}>
          <input
            type="text"
            placeholder="Image URL"
            value={this.state.imageUrl}
            onChange={this.onImageUrlChange}
          />
          <button type="submit">Add Image</button>
        </form>
        <ImageList images={this.state.images} />
      </>
    );
  }
}
