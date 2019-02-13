import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  debugger
  return {
    currentUser: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
