import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";
import TodoInput from "./components/Todoinput";
import TodoList from "./components/TodoList";
export default class App extends Component {
  state = {
    items: [
      { id: 1, title: "wakeup" },
      { id: 2, title: "make breakfast" }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    console.log("handle change");
  };
  handleSubmit = e => {
    console.log("handle Submit");
  };
  clearList = e => {
    console.log("handle List");
  };
  handleDelete = id => {
    console.log(`handle Delete ${id}`);
  };
  handleEdit = id => {
    console.log(`handle Edit ${id}`);
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.state.item}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
//
