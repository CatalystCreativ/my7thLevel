import React from 'react';
import SignupFormContainer from '../session_form/signup_form_container';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="splash-container">
          <div>
            <SignupFormContainer />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg p-3 mb-2 bg-info text-white text-center">
              More content
            </div>
            <div className="col-lg p-3 mb-2 bg-info text-white text-center">
              More content
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SplashPage;
