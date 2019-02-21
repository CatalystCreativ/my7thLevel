import React from 'react';
import Link from 'react-router-dom';
import SignupFormContainer from '../session_form/signup_form_container';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-wrapper">
        <div className="splash-container">
          <div>
            <SignupFormContainer />
          </div>
        </div>
        <div className="container splash">
          <div className="row transform">
            <div className="col-md-6 offset-sm-3 text-center text-black text-center">
              <h4>Transform How You Build Engagement in Our Expert-Led Workshop</h4>
              <p className="pt-3 pb-2 p-font" style={{fontSize: '11px'}}>Our expert facilitators lead you or your team through a deep dive into your current engagement and create a custom plan to take you to the Seventh Level.</p>
              <button className="btn btn-back" >
                <a href="https://www.the-seventhlevel.com/schedule-workshop" style={{color: 'white'}}>Schedule an in Person Workshop</a>
              </button>
            </div>
          </div>

          <hr/>

          <div className="row splash">
            <h4 className="col-lg text-center text-black text-center">What part of your company can benefit most from the Seventh Level Framework</h4>
          </div>
          
          <div className="row splash">
            <div className="col-md-4 col-sm-12 text-center">
              <h4 className="mb-4">Employee Relations</h4>
              <h6 className="place-photo">***add photo here***</h6>
              <p className="p-font">To foster productivity and culture in the workplace, <br/><strong>you need engagement.</strong></p>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <h4 className="mb-4">Sales</h4>
              <h6 className="place-photo">***add photo here***</h6>
              <p className="p-font">To capture the attention of potential leads, <br/><strong>you need engagement.</strong></p>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <h4 className="mb-4">Marketing</h4>
              <h6 className="place-photo">***add photo here***</h6>
              <p className="p-font">To build passionate brand followers, <br/><strong>you need engagement.</strong></p>
            </div>
          </div>

          <hr/>

          <div className="container">
            <div className="row splash justify-content-center">
              <div className="col-md-5 col-sm-10 v1">
                <h4>But, what is engagement? Everywhere you look, people and platforms have different definitions for engagement.</h4>
              </div>
              <div className="col-md-5 col-sm-10">
                <p className="p-font">Yet, it’s the foundation on which we connect with each other, brands, employers and even our significant others. Because without engagement, we are apathetic. At CatalystCreativ, we believe that engagement is the invisible force that guides our experiences and our decision making. Understanding and harnessing it allows you to build connections with human beings that drive belief and action.</p>
                <p className="p-font">Adapted from the renowned work of education researchers Bangert-Drowns and Pyke, the Seventh Level Engagement Framework empowers every individual with a language to define, understand and improve engagement.</p>
              </div>
            </div>
          </div>
          <div className="row bg img-fluid pt-5">
            <div className="box"></div>
            <div>***Will be removing this image and replacing it***</div>
          </div>
        </div>
      </div>
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
