import { CORE } from '../variables';
import React from 'react';

class Core extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.props.handleSubmit;
    this.update = this.props.updateField;
  }

  render() {

    const {core1, core2, core3, core4, core5, phrase} = this.props.core
    const core = [core1, core2, core3, core4, core5, phrase];
    CORE.map((question, idx) => {
      core.push(
        <div id=`question${idx}`>
          <div className="card col-5">
            <div className="card-header">
              {question}
            </div>
            <div className="card-body">
              <textarea className="w-200" name="" id="" cols="30" rows="10" value={core[idx]}></textarea>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {core}
      </div>
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
