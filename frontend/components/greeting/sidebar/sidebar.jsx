import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.fetchSeventhLevels = this.props.fetchSeventhLevels;
  }

  componentDidMount() {
    this.fetchSeventhLevels();
  }

  render() {
    const seventhLevels = this.props.seventhLevels.map(seventhLevel => {
      return (
        <Link to={`/seventh_levels/${seventhLevel.id}`}>{seventhLevel.title}</Link>
      );
    });
    return (
      <ul>
        {seventhLevels}
      </ul>
    );
  }
}

export default withRouter(Sidebar);
