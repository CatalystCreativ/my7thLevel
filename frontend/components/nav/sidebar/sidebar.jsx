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
    this.createSeventhLevel().then((response) => {
    this.props.history.push(`/home/${response.seventhLevel.id}`)});
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
      <nav className="nav d-flex flex-md-col align-items-start bg-dark shadow" id="sidebar" ref={elem => this.sidebar = elem}>
        <div className=" text-center flex-column w-100">
          <div className="sidebar-header header-title">
            <h3>My Seventh Levels</h3>
          </div>

          <div className="bg-secondary shadow w-100">
            <ul className="list-group align-text-center list-group-flush bg-secondary w-100">
              {seventhLevels}
            </ul>
          </div>
          
       </div> 
      <button className="mt-auto p-2 btn btn-primary w-100" onClick={this.newSeventhLevel}>New Seventh Level</button>
         
      </nav>
    );
  }
}

export default withRouter(Sidebar);
