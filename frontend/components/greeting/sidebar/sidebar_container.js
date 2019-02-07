import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchSeventhLevels } from '../../actions/session_actions';

const mapStateToProps = ({ entities, session }) => {
  return {
    seventhLevels: entities[seventhLevels]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSeventhLevels: () => dispatch(fetchSeventhLevels())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
