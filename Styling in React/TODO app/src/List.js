import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    const {todos,handleDelete} = this.props;
    return (
      <div className="list">
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} handleDelete={handleDelete} />
        ))}
      </div>
    );
  }
}
