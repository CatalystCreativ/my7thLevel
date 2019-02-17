import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

  // <a className='navbar-text' data-toggle='collapse' href="#sidebar" role='button' aria-expanded='false' aria-controls='sidebar'>My Seventh Levels</a>
  
  componentDidMount() {
    $('#sidebarCollapse').on('click', () => {
      $('#sidebar').toggleClass('active');
      $('#content').toggleClass('active');
    });
  }


  render() {
    const { currentUserInfo, currentUser, logout } = this.props;
    let navItems;
    if (currentUser) {
      navItems = (
        <div className='collapse navbar-collapse' id="navbarNav">
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <button type='button' id='sidebarCollapse' className='btn btn-info'>
                <span>My Seventh Levels</span>
              </button>
            </li>
            <li className='nav-item'>
              <span className='navbar-text ml-3'>Logged in as {currentUserInfo.first_name}</span>
            <button className='btn btn-outline-primary ml-3' onClick={logout}>Log Out</button>
            </li>
          </ul>
        </div>
      );
    } else {
      navItems = (
        <>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/signup'>Sign Up</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>Log In</Link>
              </li>
            </ul>
          </div>
        </>
      );
    }

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light shadow'>
        <div className="container-fluid justify-content-between">
            <Link className='navbar-brand' to='/'>7th Level</Link>

            <div>
              <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbaNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className="navbar-toggler-icon"></span>
              </button>

              {navItems}
            </div>

          </div>
        </nav>
    );
  }
}
export default Nav;
