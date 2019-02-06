import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {


  render() {
    const { currentUser, logout } = this.props;
    let output;
    if (currentUser) {
      output = (
        <div className='welcome-msg'>
          <span>Logged in as {currentUser.first_name}</span>
          <button onClick={logout}>Log Out</button>
        </div>
      );
    } else {
      output = (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link className='navbar-brand' to='/'>7th Level</Link>

          <button className='navbar-toggler' type='button' dataToggle='collapse' dataTarget='#navbarNav' ariaControls='navbaNav' ariaExpanded='false' ariaLabel='Toggle navigation'>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/signup'>Sign Up</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>Log In</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }

    return (
      <div>
        {output}
      </div>
    );
  }
}
export default Greeting;


