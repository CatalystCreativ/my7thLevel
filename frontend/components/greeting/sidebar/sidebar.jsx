import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.fetchSeventhLevels = this.props.fetchSeventhLevels;
    this.createSeventhLevel = this.props.createSeventhLevel;
  }

  componentDidMount() {
    this.fetchSeventhLevels();
  }

  newSeventhLevel() {
    this.createSeventhLevel().then((seventhLevel) => this.props.history.push(`/home/${seventhLevel.id}`));
  }

  render() {
    const seventhLevels = this.props.seventhLevels.map(seventhLevel => {
      return (
        <Link to={`/seventh_levels/${seventhLevel.id}`}>{seventhLevel.title}</Link>
      );
    });
    return (
      <ul>
        <button onClick={this.newSeventhLevel}>New Seventh Level</button>
        {seventhLevels}
      </ul>
    );
  }
}

export default withRouter(Sidebar);
