import { CORE } from '../variables';
import React from 'react';

class Core extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.props.handleSubmit;
    this.update = this.props.updateField;
  }

  render() {
    // NEEDS UPDATE FOR LEVEL
    return (
      <h1>
        Core
      </h1>
    );
  }
}

{/* <form onSubmit={this.handleSubmit} className="">
  {CORE.core1}
  <div>{this.level.levelDescription}</div>

  <div className="~~~~~">
    <h2>
      <label>ACTION</label>
      {this.props.actionDescription}
    </h2>
  </div>

  <div className="form-group">
    <label htmlFor="action">Action: {this.level.actionDescription}</label>
    <input type="text"
      className="form-control"
      placeholder="Email Address"
      id="email"
      value={this.state.email}
      onChange={this.update(`action${this.props.core}`)}/>
  </div>
</form> */}

export default Core;
