import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  // add constructor and state here
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }

  // create handleAdd and handleRemove functions here
  handleChange = (e) => {
    this.setState({text:e.target.value});
  };

  handleAdd = ()=>{
    this.setState({todo:this.state.todos.unshift({text: this.state.text}),text:""});
  }

  handleDelete = (index)=>{
    this.setState({todo: this.state.todos.splice(index, 1)});
  
  }
  render() {
    return (
      <div className="App">
        <span>Todo</span>
        <Form handleAdd={this.handleAdd} handleChange={this.handleChange} text={this.state.text} />
        <List todos={this.state.todos} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}
