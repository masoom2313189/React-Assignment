import { Component } from "react";

export class Todo extends Component {
  render() {
    const {index,todo,handleDelete} = this.props;
    return (
      <div className="todo">
        <p>{todo.text}</p>
        <button onClick={()=>handleDelete(index)}>x</button>
      </div>
    );
  }
}
