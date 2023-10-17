import { Component } from "react";

export class Form extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: ""
  //   };
  // }

  render() {
    
  
    const {handleAdd,handleChange,text} = this.props;
    return (
      
      <div className="form">
        <input
          onChange={handleChange}
          value={text}
          placeholder="Whats on your mind?"
          required
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    );
  }
}
