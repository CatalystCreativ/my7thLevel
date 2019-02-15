import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: Boolean(state.session.currentUserId),
    currentUserInfo: state.entities.users[state.session.currentUserId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
