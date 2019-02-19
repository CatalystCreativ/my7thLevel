import React from 'react';
import Link from 'react-router-dom';
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
        <div className="container splash">
          <div className="row pb-3">
            <div className="col-md-6 offset-sm-3 text-center text-black text-center">
              <h4>Transform How You Build Engagement in Our Expert-Led Workshop</h4>
              <p className="pt-3 pb-2" style={{fontSize: '11px'}}>Our expert facilitators lead you or your team through a deep dive into your current engagement and create a custom plan to take you to the Seventh Level.</p>
              <button className="btn btn-back" >
                <a href="https://www.the-seventhlevel.com/schedule-workshop" style={{color: 'white'}}>Schedule an in Person Workshop</a>
              </button>
            </div>
          </div>
      
          <div className="row bg img-fluid pt-5">
            <div className="box"></div>
          </div> 
        </div>
      </>
    );
  }
}

export default SplashPage;
{/* <div className="container">
  <div className="column">
    <div className="col-lg p-3 mb-2 text-black text-center">
      <h3>Transform How You Build Engagement in Our Expert-Led Workshop</h3>
      <p className="pt-4">Our expert facilitators lead you or your team through a deep dive into your current engagement and create a custom plan to take you to the Seventh Level.</p>
      <button className="btn" style={{ backgroundColor: '#3EC2CF' }}>
        <a href="https://www.the-seventhlevel.com/schedule-workshop" style={{ color: 'black' }}>Schedule an in Person Workshop</a>
      </button>
    </div>
    <div className="col-lg p-3 mb-2 bg-info text-white text-center w-50">
      More content
            </div>
  </div>
</div> */}