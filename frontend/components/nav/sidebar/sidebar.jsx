import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.fetchSeventhLevels = this.props.fetchSeventhLevels;
    this.createSeventhLevel = this.props.createSeventhLevel;

    this.newSeventhLevel = this.newSeventhLevel.bind(this);
  }

  componentDidMount() {
    this.fetchSeventhLevels();

    $("#sidebar").mCustomScrollbar({
      theme: "minimal"
    });


  }

  newSeventhLevel() {
    this.createSeventhLevel().then((seventhLevel) => <Redirect to={`/home/${seventhLevel.id}`} />);
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
      <nav className="shadow bg-secondary" id="sidebar" ref={elem => this.sidebar = elem}>
        <div className="sidebar-header">
          <h3>My Seventh Levels</h3>
        </div>

        <div className="bg-secondary shadow pt-4">
          <button className="btn btn-primary" onClick={this.newSeventhLevel}>New Seventh Level</button>

          <ul className="list-group list-group-flush bg-secondary w-100 mx-auto">
            {seventhLevels}
          </ul>
        </div>

      </nav>
    );
  }
}

export default withRouter(Sidebar);
