import { connect } from 'react-redux';
import Home from './home';
import { fetchSeventhLevel } from '../../actions/session_actions';

const msp = ({ entities, errors }, ownProps) => {
  return {
    errors: errors.session,
    seventhLevel: entities.seventhLevels[ownProps.match.params.seventhLeveLId]
  };
};

const mdp = (dispatch) => {
  return {
    fetchSeventhLevel: (id) => dispatch(fetchSeventhLevel(id)),
  };
};

export default connect(msp, mdp)(Home);
