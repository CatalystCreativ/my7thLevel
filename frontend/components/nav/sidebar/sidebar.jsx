import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.fetchSeventhLevels = this.props.fetchSeventhLevels;
    this.createSeventhLevel = this.props.createSeventhLevel;

    this.newSeventhLevel = this.newSeventhLevel.bind(this);
    this.renderNew7thLevel = this.renderNew7thLevel.bind(this);
  }

  componentDidMount() {
    this.fetchSeventhLevels();

    // $("#sidebar").mCustomScrollbar({
    //   theme: "minimal"
    // });


  }

  newSeventhLevel() {
    this.createSeventhLevel().then((response) => {
    this.props.history.push(`/home/${response.seventhLevel.id}`)});
  }

  renderNew7thLevel(id) {
    return () => {
      this.props.history.push(`/home/${id}`);
    };
  }
  // <Link className="text-white" to={`/home/${seventhLevel.id}`}>{seventhLevel.title}</Link>

  render() {
  const seventhLevelsValues = Object.values(this.props.seventhLevels);
    const seventhLevels = seventhLevelsValues.map((seventhLevel, idx) => {
      const klass = idx % 2 === 1 ? "list-group-item bg-dark" : "list-group-item bg-secondary";
      return (
        <li key={idx} onClick={this.renderNew7thLevel(seventhLevel.id)} className={klass}>
          {seventhLevel.title}
        </li>
      );
    });
    return (
      <nav className="nav d-flex flex-md-col justify-between align-items-start bg-dark shadow" id="sidebar" ref={elem => this.sidebar = elem}>
        <div className=" text-center flex-column w-100">
          <div className="sidebar-header header-title m-3">
            <h4>My Seventh Levels</h4>
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
