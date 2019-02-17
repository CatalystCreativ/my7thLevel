import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.fetchSeventhLevels = this.props.fetchSeventhLevels;
    this.createSeventhLevel = this.props.createSeventhLevel;

    this.newSeventhLevel = this.newSeventhLevel.bind(this);
  }

  componentDidMount() {
    this.fetchSeventhLevels();
  }

  newSeventhLevel() {
    this.createSeventhLevel().then((seventhLevel) => this.props.history.push(`/home/${seventhLevel.id}`));
  }

  render() {
  const seventhLevelsValues = Object.values(this.props.seventhLevels);
    const seventhLevels = seventhLevelsValues.map((seventhLevel, idx) => {
      return (
        <li key={idx} className="list-group-item bg-secondary">
          <Link className="text-white" to={`/home/${seventhLevel.id}`}>{seventhLevel.title}</Link>
        </li>
      );
    });
    return (
      <div className="col-3 bg-secondary shadow pt-4 collapse" id="sidebar">
        <button className="btn btn-primary" onClick={this.newSeventhLevel}>New Seventh Level</button>

        <ul className="list-group list-group-flush bg-secondary w-100 mx-auto">
          {seventhLevels}
        </ul>
      </div>
    );
  }
}

export default withRouter(Sidebar);
