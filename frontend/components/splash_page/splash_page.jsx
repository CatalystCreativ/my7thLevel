import React from 'react';
import SignupFormContainer from '../session_form/signup_form_container';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className="affix" alt="Responsive image" src={window.backgroundImage} ></img>
        <SignupFormContainer />
      </div>
    );
  }
}

export default SplashPage;
