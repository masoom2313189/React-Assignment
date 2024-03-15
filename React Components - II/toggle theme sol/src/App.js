import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      theme: "light" ,
    mode: false
  };
  }

  // create handler function here
handleTheme = () => {
  this.setState({
    mode : !this.state.mode
  })
}
  render() {
    const {mode} = this.state;
    const themeClass = mode ? 'light' : 'dark';
    const themePage = mode ?  'dark':'light';
    return (
      // Add dynamic classes with state to the div below
  
      <div className={`app ${themePage}`}>
      {/* <button className={mode ? "dark" : "light"}onClick={this.handleTheme} >{mode?"Dark theme":"Light Theme"}</button> */}
      <button className={`theme-button ${themeClass}`} onClick={this.handleTheme}>
        {mode ? 'Light Theme' : ' Dark Theme'}
        </button>
        {/* Add the button element here */}
        <h2>Why We Explore - NASA</h2>
        <img
          src="https://res.cloudinary.com/dl26pbek4/image/upload/v1671686299/launch-pad-67650_1920_p6izup.jpg"
          alt="space shuttle"
          className="images"
        />
        <p>
          Humans are driven to explore the unknown, discover new worlds, push
          the boundaries of our scientific and technical limits, and then push
          further. The intangible desire to explore and challenge the boundaries
          of what we know and where we have been has provided benefits to our
          society for centuries.
        </p>
      </div>
    );
  }
}

export default App;
