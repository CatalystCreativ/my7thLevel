import React from 'react'
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.blankState = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
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
        <div>
          <label htmlFor="first-name">First Name: </label>
          <input type="text" placeholder="First Name" id="first-name" value={this.state.firstName} onChange={this.update('firstName')}/>
        </div>

        <div>
          <label htmlFor="last-name">Last Name: </label>
          <input type="text" placeholder="Last Name" id="last-name" value={this.state.lastName} onChange={this.update('lastName')}/>
        </div>
      </>
    );

    return (
      <div>
        <header>
          <h3>{formType}</h3>
          {this.renderErrors()}
        </header>

        <form onSubmit={this.handleSubmit}>
          {extraFields}

          <div>
            <label htmlFor="email">Email Address: </label>
            <input type="text" placeholder="Email Address" id="email" value={this.state.email} onChange={this.update('email')}/>
          </div>

          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" placeholder="Password" id="password" value={this.state.password} onChange={this.update('password')}/>
          </div>

          <button type="submit">{formType}</button>
        </form>

        <div>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>

      </div>
    );
  }
}

export default SessionForm;