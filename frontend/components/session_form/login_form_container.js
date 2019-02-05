import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearAllErrors } from '../../actions/session_actions';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In'
  };
};

const mdp = (dispatch) => {
  return {
    clearAllErrors: () => dispatch(clearAllErrors()),
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(msp, mdp)(SessionForm);