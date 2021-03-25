import React, { Component } from "react";
import "./AddQLForm.css";
class AddQLForm extends Component {
  render() {
    return (
      <div className="form">
        <div className="form__ip">
          <input placeholder="Name" />
        </div>
        <div className="form__ip">
          <input placeholder="URL" />
        </div>
        <div>
          <button className="btn__save">Save</button>
        </div>
        <div>
          <button className="btn__cancel">Cancel</button>
        </div>
      </div>
    );
  }
}

export default AddQLForm;
