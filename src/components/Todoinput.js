import React, { Component } from "react";
import { createDecipher } from "crypto";

export default class Todoinput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItems } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="n">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
