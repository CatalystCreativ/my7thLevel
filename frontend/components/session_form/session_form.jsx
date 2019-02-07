import React from 'react'
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.blankState = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      organization: ''
    };

    this.state = Object.assign({}, this.blankState);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearAllErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.setState(this.blankState);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderErrors() {
    const { errors } = this.props;

    return (
      <ul>
        {errors.map((error, idx) => <li className='error-color' key={idx}>{error}</li>)}
      </ul>
    );
  }

  render() {
    const { formType } = this.props;
    const otherForm = formType === "Log In" ? "Sign Up" : "Log In";

    const extraFields = formType === "Log In" ? null : (
      <>
        <div className="form-group">
          <label htmlFor="first-name">First Name: </label>
          <input type="text" className="form-control" placeholder="First Name" id="first-name" value={this.state.firstName} onChange={this.update('firstName')}/>
        </div>

        <div className="form-group">
          <label htmlFor="last-name">Last Name: </label>
          <input type="text" className="form-control" placeholder="Last Name" id="last-name" value={this.state.lastName} onChange={this.update('lastName')}/>
        </div>

        <div className="form-group">
          <label htmlFor="organization">Organization: </label>
          <input type="text" className="form-control" placeholder="Organization" id="organization" value={this.state.organization} onChange={this.update('organization')} />
        </div>
      </>
    );

    return (
      <div>

        <div className="shadow w-50 mx-auto p-5 mt-5">
          
          <div className="container">
            <header className='w-25 mx-auto text-center'>
              <h3>{formType}</h3>
              {this.renderErrors()}
            </header>

            <div className="col-7 mx-auto">
              <form onSubmit={this.handleSubmit} className="">
                {extraFields}

                <div className="form-group">
                  <label htmlFor="email">Email Address: </label>
                  <input type="text" className="form-control" placeholder="Email Address" id="email" value={this.state.email} onChange={this.update('email')}/>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password: </label>
                  <input type="password" className="form-control" placeholder="Password" id="password" value={this.state.password} onChange={this.update('password')}/>
                </div>
                <div className='w-100 text-center'>
                  <button type="submit" className="btn btn-primary">{formType}</button>
                </div>
              </form>
            </div>  
          </div>
        </div>


      </div>
    );
  }
}
{/* <div>
  <Link to="/login">Log In</Link>
  <Link to="/signup">Sign Up</Link>
</div> */}

export default SessionForm;