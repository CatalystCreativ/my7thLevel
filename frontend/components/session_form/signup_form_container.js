import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearAllErrors } from '../../actions/session_actions';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up'
  };
};

const mdp = (dispatch) => {
  return {
    clearAllErrors: () => dispatch(clearAllErrors()),
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(msp, mdp)(SessionForm);