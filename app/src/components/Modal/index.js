import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const {
      isVisible,
      title,
      cancel = "Cancel",
      submit = "Ok",
      children,
      onCancel,
      onSubmit,
    } = this.props;
    console.log(isVisible);
    return (
      <>
        {isVisible && (
          <div className="modal">
            <h3>{title}</h3>
            {children}
            <div className="modal-action">
              <button className="btn btn-confirm" onClick={onSubmit}>
                {submit}
              </button>
              <button className="btn btn-cancel" onClick={onCancel}>
                {cancel}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
