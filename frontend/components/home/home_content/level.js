import React from 'react';

class Level extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const levelInfo = this.props.levelInfo;
    const levelConsts = this.props.levelConsts;
    const handleSubmit = this.props.handleSubmit;
    const update = this.props.update;
    return (
      <form onSubmit={handleSubmit} className="">
        {levelConsts.levelNum}
        {levelConsts.levelTitle}
        <div>{levelConsts.levelDescription}</div>

        <div className="">
          <h2>
            <label>ACTION</label>
            {levelConsts.actionDescription}
          </h2>
        </div>

        <div className="form-group">
          <label htmlFor="action">Action: {levelConsts.actionDescription}</label>
          <input type="text"
            placeholder="Your Action Goes Here"
            value={this.state.email}
            onChange={this.update(`action${this.props.levelNum}`)}/>
        </div>
    );
  }
}

export default Level;
