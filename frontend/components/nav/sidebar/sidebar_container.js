import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchSeventhLevels, createSeventhLevel } from '../../../actions/seventh_level_actions';

const mapStateToProps = ({ entities, session }) => {
  return {
    seventhLevels: entities.seventhLevels
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSeventhLevels: () => dispatch(fetchSeventhLevels()),
    createSeventhLevel: () => dispatch(createSeventhLevel()),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
