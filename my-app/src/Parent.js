import React from "react";
import Modal from "./Modal";

export class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM.
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1,
    }));
  }

  render() {
    return (
      <div id="parent-root" onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        {this.state.clicks > 0 ? (
          <p>
            bubbled up to Parent.js because{" "}
            <i>
              <b>DOM tree</b>
            </i>{" "}
            child.
          </p>
        ) : (
          ""
        )}
        <p>
          Open up the browser DevTools to observe that the button is not a child
          of this parent-root div with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

export function Child() {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

export default Parent;
